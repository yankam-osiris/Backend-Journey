const userData = require('../data/data')
const AppError = require('../utils/apperror')
const promises = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(userData.find(user=> user.id === 10))
        }, 3000)
    })
}


const user = async(req, res, next)=>{
    try {
        const data = await promises()
        if(!data){
            throw new AppError('user not found', 404)
        }
        res.status(200).json({
            data
        })
    } catch (error) {
        next(error)
    }
}

module.exports = user