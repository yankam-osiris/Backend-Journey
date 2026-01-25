const AppError = require('../utils/AppError')
const orders = require('./orders')


const createOrder = async(orderDetails) => {
    const allowedStatus = ['pending', 'paid', 'cancelled']
    const {customerName, status, totalAmount} = orderDetails
    const amount = Number(totalAmount)

    if(!customerName || !status || !amount){
        throw new AppError('please an order must contain a customer name a status and a total amount', 400)
    }

    if(!allowedStatus.includes(status)){
        throw new AppError('please enter a valid status ', 400)
    }

    if(typeof amount !== 'number' || amount < 0){
        throw new AppError('enter a valid amount greater or equal to 0', 400)
    }

    const newOrder = {id: Date.now(), customerName, amount, status}
    orders.push(newOrder)
    return newOrder
}

const getAllOrders = async (status) => {
    const allowed = ['pending', 'paid', 'cancelled'];

    
    if (status) {
        if (!allowed.includes(status)) {
            throw new AppError('invalid status filter', 400);
        }
        return orders.filter(order => order.status === status);
    }

   
    return orders;
};



const getSingleOrder = async(id) => {
    const productId = Number(id)

    const result = orders.find(order => order.id === productId)

    if(!result){
        throw new AppError('order not found', 404)
    }

    return result
}

const updateStatus = async(id, status) =>{
    const validUpdateStatus = ['paid', 'cancelled']
    const order = await getSingleOrder(id)

    if(!order){
        throw new AppError('order with this id does not exist', 404)
    }

    if(order.status === 'cancelled'){
        throw new AppError('this order has been cancelled already please make a new order', 400)
    }

    if(!validUpdateStatus.includes(status)){
        throw new AppError('order status can only be paid or cancelled', 400)
    }

    order.status = status
    return order
}

const cancelOrder = async (id) => {
    
    const order = await getSingleOrder(id);

    if (order.status === 'paid') {
        throw new AppError('Cannot cancel an order that has already been paid', 400);
    }

    order.status = 'cancelled'
    
    return order;
}
module.exports = {getAllOrders, createOrder, getSingleOrder, updateStatus, cancelOrder}