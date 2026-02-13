const product = require('../models/products')

const insertProduct = async(productInfo) => {
   const createdProduct = await product.create(productInfo)

    return createdProduct
}

const getAllProducts = async()=>{
    const products = await product.find().select('name price stockQuantity slug').lean()

    return products
}


module.exports = {insertProduct, getAllProducts}