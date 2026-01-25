const {getAllOrders, createOrder, getSingleOrder, updateStatus, cancelOrder} = require('../services/service')
const asyncHandler = require('../utils/asyncHandler')

const newOrder = asyncHandler(async(req, res, next)=>{
    const orderDetails = req.body
    const order = await createOrder(orderDetails)
    res.status(201).json({
        message: 'order created',
        order
    })

})

const getOrders = asyncHandler(async(req, res, next)=>{
    const {status} = req.query
    const orders = await getAllOrders(status)

    res.status(200).json({
        orders
    })
})

const getAnOrder = asyncHandler(async(req, res, next)=>{
    const id = req.params.id

    const order = await getSingleOrder(id)

    res.status(200).json({
        order
    })
})

const updateOrder = asyncHandler(async(req, res, next)=>{
    const id = req.params.id
    const {status} = req.body

    const updatedOrder = await updateStatus(id, status)

    res.status(200).json({
        message: 'status updated successfully',
        updatedOrder
    })
})


const cancelAnOrder = asyncHandler(async(req, res, next)=>{
    const id = req.params.id

    await cancelOrder(id)
    res.status(204).json({
        message: 'order cancelled successfully'
    })
})


module.exports = {cancelAnOrder, newOrder, getOrders, getAnOrder, updateOrder}