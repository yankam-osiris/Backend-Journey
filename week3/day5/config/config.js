require('dotenv').config()

const config = {
    port: process.env.PORT || 5000,
    env: process.env.NODE_ENV || 'development',
    appName: process.env.APP_NAME || 'Backend API',
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production'
};

module.exports = config;