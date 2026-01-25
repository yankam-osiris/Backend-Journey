const express = require('express')
const {cancelAnOrder, newOrder, getOrders, getAnOrder, updateOrder} = require('../controllers/controller')

const router = express.Router()

router.route('/')
    .get(getOrders)
    .post(newOrder)

router.route('/:id')
    .get(getAnOrder)

router.patch('/:id/cancel', cancelAnOrder)
router.patch('/:id/update', updateOrder)


module.exports = router 