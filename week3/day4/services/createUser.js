const AppError = require('../utils/apperror')
const userData = require('./data')

const createUser = async(userInfo) => {
    if (!userInfo.name || !userInfo.email){
        throw new AppError('name and email are required', 400)
    }

    const existUser = userData.find(user => user.email === userInfo.email)

    if(existUser){
        throw new AppError('user already exist', 400)
    }
    
    const newUser = {id: Date.now(), ...userInfo}

   userData.push(newUser)
   return newUser
}

module.exports = createUser