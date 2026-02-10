const mongoose = require('mongoose')
const config = require('../../config/config')

const connectDB = async() => {
    try {
        await mongoose.connect(config.databaseUrl)
        console.log(`mongodb connected successfully`)
    } catch (error) {
        console.error('could not connect to mongodb locally', error)
        process.exit(1)
    }
}

module.exports = connectDB