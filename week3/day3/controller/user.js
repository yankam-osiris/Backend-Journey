const AppError = require('../utils/apperror')
const asyncWrapper = require('../utils/asyncHandler')
const userData = require('../data/data')

const findUser = asyncWrapper(async(req, res)=>{
    const data = userData.find(user => user.id === 10)
    if(!data){
        throw new AppError('user not found', 404)
    }

    res.status(200).json({
        data
    })
})

module.exports = findUser