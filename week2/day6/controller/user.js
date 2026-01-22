const users = require('../data/user')
const AppError = require('../utils/appError')

const getAllUsers = (req, res)=>{
   return res.status(200).json({
    success: true,
    data: users
   })
}


const getUserById = (req, res, next)=>{
    const userId = req.params.id


    const selectedUser = users.find(user => user.id === Number(userId))

    if(!selectedUser){
        return next(new AppError('user not found', 404))
    }


    return res.status(200).json({
        success: true,
        data: selectedUser
    })
}

module.exports = {getAllUsers, getUserById}