const users = require('../data/user')

const getAllUsers = (req, res)=>{
   return res.status(200).json({
    success: true,
    data: users
   })
}


const getUserById = (req, res)=>{
    const userId = req.params.id


    const selectedUser = users.find(user => user.id === Number(userId))

    if(!selectedUser){
        return res.status(404).json({
            success: false,
            message: 'user not found'
        })
    }


    return res.status(200).json({
        success: true,
        data: selectedUser
    })
}

module.exports = {getAllUsers, getUserById}