const {getUserById, getAllUsers} = require('../controller/user')
const {getAllBooks,getBookById} = require('../controller/book')
const express = require('express')

const router = express.Router()

router.get('/getUser', getAllUsers)
router.get('/userById/:id', getUserById)
router.get('/book', getAllBooks)
router.get('/getbook/:id', getBookById)

module.exports = router