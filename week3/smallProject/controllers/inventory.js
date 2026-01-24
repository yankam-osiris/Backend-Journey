const asyncWrapper = require('../utils/asyncwrapper')
const {inputData, getAllProducts, getProductById, sellProduct, restockProduct, deleteProduct} = require('../services/inventoryService')

const inputStock = asyncWrapper(async(req, res, next)=>{
    const stockData = req.body
    const newProduct = await inputData(stockData)

    res.status(201).json({
        status : 'success',
        message : 'product created successfully',
        newProduct
    })

})

const getallProducts = asyncWrapper(async(req, res, next)=>{
    const products = await getAllProducts()

    res.status(200).json({
        products
    })
})

const getproductById = asyncWrapper(async(req, res, next)=>{
    const productId = req.params.id

    const product = await getProductById(productId)

    res.status(200).json({
        product
    })
})

const sellproduct = asyncWrapper(async(req, res, next)=>{
       const productId = req.params.id

    const product = await sellProduct(productId)

    res.status(200).json({
        message: 'product sold successfully',
        product
    })
})

const restockproduct = asyncWrapper(async(req, res, next)=>{
     const productId = req.params.id
     const {quantity} = req.body

    const product = await restockProduct(productId, quantity)

    res.status(200).json({
        message: 'product restocked successfully',
        product
    })
})

const deleteproduct = asyncWrapper(async(req, res, next)=>{
     const productId = req.params.id

     await deleteProduct(productId)

    res.status(200).json({
        message: 'product deleted successfully'
    })
})
module.exports = {inputStock, getallProducts, getproductById, sellproduct, restockproduct, deleteproduct}