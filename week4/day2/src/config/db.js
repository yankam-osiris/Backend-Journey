const config = require('../../config/config')
const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        await mongoose.connect(config.mongodbUrl)
        console.log('connected to mongodb locally')
    } catch (error) {
        console.log('error connecting to mongodb')
        process.exit(1)
    }
}

module.exports = connectDB 