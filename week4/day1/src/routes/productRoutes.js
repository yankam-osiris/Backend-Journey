const express = require('express')
const {createProduct, getProducts, updateProducts, delProduct} = require('../controllers/productController')

const router = express.Router()

router.post('/newproduct', createProduct)
router.get('/products', getProducts)
router.patch('/:id/update', updateProducts)
router.delete('/:id/delete', delProduct)

module.exports = router