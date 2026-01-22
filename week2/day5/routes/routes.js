const {getUserById, getAllUsers} = require('../controllers/user')
const express = require('express')

const router = express.Router()

router.get('/getUser', getAllUsers)
router.get('/userById/:id', getUserById)

module.exports = router