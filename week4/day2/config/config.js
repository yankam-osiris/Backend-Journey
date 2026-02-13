require('dotenv').config()

const config = {
    port: process.env.PORT || 3000,
    mongodbUrl: process.env.MONGODB_URL,
    nodeEnv: process.env.NODE_ENV
}

module.exports = config
