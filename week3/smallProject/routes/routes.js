const express = require('express');
const router = express.Router();


const { inputStock, getallProducts, getproductById, sellproduct, restockproduct, deleteproduct} = require('../controllers/inventory');


router.route('/')
    .get(getallProducts)  
    .post(inputStock);     


router.route('/:id')
    .get(getproductById)   
    .delete(deleteproduct); 


router.patch('/:id/sell', sellproduct);
router.patch('/:id/restock', restockproduct);

module.exports = router;