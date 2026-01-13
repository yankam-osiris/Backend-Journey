const express = require('express')
const {Welcome, post} = require('../controllers/controller')

const router = express.Router()

router.get('/home', Welcome)
router.post('/regis', post)

module.exports = router 