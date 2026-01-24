const asyncWrapper = require('../utils/asyncWrapper')
const createUser = require('../services/createUser')


const addUser = asyncWrapper(async(req, res, next)=>{
    const information = req.body

    const newUser = await createUser(information)

    res.status(201).json({
        newUser
    })
    
})

module.exports = addUser