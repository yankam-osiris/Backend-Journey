const inventories = require('./stock')
const AppError = require('../utils/apperror')

// service to add a product
const inputData = async(stockData)=>{
    const {name, price, stock} = stockData

    if(!name || !price || stock === undefined){
        throw new AppError(' A product must have name, price and stock quantity', 400)
    }

    if(typeof price !== 'number' || price < 0){
        throw new AppError(' price cannot be a negative number', 400)
    }

    if(typeof stock !== 'number' || stock < 0){
        throw new AppError('stock cannot be a negative number', 400)
    }

    const existStock = inventories.find(invent => invent.name === name)
    if(existStock){
        throw new AppError('this product already exist', 400)
    }

    const newProduct = {id: Date.now(), name, price, stock}
    inventories.push(newProduct)
    return newProduct
}

// service to get all products
const getAllProducts = async()=>{
    return inventories
}

// service to get a product by its id
const getProductById = async(productId)=>{
    const id = Number(productId)
    const product = inventories.find(invent => invent.id === id)

    if(!product){
        throw new AppError('product with that id not found', 404)
    }

    return product
}

//service to sell a product 
const sellProduct = async(productId)=>{
    const productToSell = await getProductById(productId)

    if(productToSell.stock <= 0){
        throw new AppError('out of stcck', 400)
    }

    productToSell.stock -= 1

    return productToSell
}

//service to restock product 

const restockProduct = async(productId, quantity)=>{
    const product = await getProductById(productId)

    const amountToAdd = Number(quantity);

    if (isNaN(amountToAdd) || amountToAdd <= 0) {
        throw new AppError('Please provide a valid quantity greater than 0 to restock', 400);
    }

    product.stock += quantity

    return product
}


// service to delete a product 
const deleteProduct = async(productId)=>{
    const id = Number(productId)

    const index = inventories.findIndex(invent => invent.id === id)

    if(index === -1){
        throw new AppError('product with this id does not exist', 404)
    }

    inventories.splice(index, 1)
    return true
}

module.exports = {inputData, getAllProducts, getProductById, sellProduct, restockProduct, deleteProduct}
