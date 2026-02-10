const express = require('express')
const errorHandler = require('./src/middlewares/errorHandler')
const connectDB = require('./src/config/db')
const config = require('./config/config')
const productRoutes = require('./src/routes/productRoutes')

const app = express()

const serverStarter = async()=>{
    try {
        await connectDB()

        app.use(express.json())

        app.get('/', (req, res)=>{
            res.send('welcome to my home page')
        } )

        app.use('/api', productRoutes)

        app.use(errorHandler)

        app.listen(config.port, () => {
            console.log(`Server running on port ${config.port}`)
        })
    } catch (error) {
        console.error('server could not start', error)
        process.exit(1)
    }
}

serverStarter()