const { insertProduct, getAllProducts, deleteProduct, updateProduct } = require('../services/productService')
const asyncWrapper = require('../utils/asyncWrapper')

const createProduct = asyncWrapper(async(req, res, next)=>{
    const productData = req.body
    const newProduct = await insertProduct(productData)

    res.status(201).json({
        status : 'success',
        message: 'product inserted successfully',
        newProduct
    })
})

const getProducts = asyncWrapper(async(req, res, next)=>{
    const products = await getAllProducts()

    res.status(200).json({
        status: 'success',
        products
    })
})

const updateProducts = asyncWrapper(async(req, res, next)=>{
    const productId = req.params.id
    const updateInfo = req.body

    const newUpdatedProduct = await updateProduct(productId, updateInfo)

    res.status(200).json({
        status: 'success',
        message: 'product updated successfully',
        newUpdatedProduct
    })
})


const delProduct = asyncWrapper(async(req, res, next)=>{
    const productId = req.params.id

    await deleteProduct(productId)

    res.status(200).json({
        status:'success',
        message:'product successfully deleted'
    })
})


module.exports = {createProduct, getProducts, updateProducts, delProduct}