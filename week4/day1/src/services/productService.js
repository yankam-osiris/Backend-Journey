const Product = require('../models/product')
const AppError = require('../utils/appError')

const insertProduct = async(productInfo)=>{
    if(!productInfo.name || !productInfo.price || !productInfo.category){
        throw new AppError('product needs a name a price and a category', 400)
    }

    const checkProduct = await Product.findOne({name : productInfo.name})

    if(checkProduct){
        throw new AppError('this product already exist', 400)
    }

    const newProduct = await Product.create(productInfo)

    return newProduct
}


const getAllProducts = async()=>{
    const products = await Product.find()
    return products
}


const deleteProduct = async(productId)=>{
    const deletedProduct = await Product.findByIdAndDelete(productId)
    if (!deletedProduct) {
        throw new AppError('Product not found', 404);
    }
    return deletedProduct
}

const updateProduct = async(productId, updateInfo)=>{
    const updatedProduct = await Product.findByIdAndUpdate(productId, updateInfo, {new: true})
    if (!updatedProduct) {
        throw new AppError('Product not found', 404);
    }

    return updatedProduct
}


module.exports = {insertProduct, getAllProducts, deleteProduct, updateProduct}