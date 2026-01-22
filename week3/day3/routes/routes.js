const express = require('express')
const findUser = require('../controller/user')

const router = express.Router()

router.get('/data', findUser)


module.exports = router