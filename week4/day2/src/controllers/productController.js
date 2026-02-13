const { insertProduct, getAllProducts } = require('../services/productservice')
const asyncWrapper = require('../utils/asyncWrapper')

const addProduct = asyncWrapper(async(req, res, next)=>{
    const newProduct = await insertProduct(req.body)
    res.status(201).json({
        status: 'success',
        message: 'product created successfully',
        data: newProduct
    })
})

const getProducts = asyncWrapper(async(req, res, next)=>{
    const products = await getAllProducts()
    res.status(200).json({
        status: 'success',
        data: products
    })
})

module.exports = {addProduct, getProducts}