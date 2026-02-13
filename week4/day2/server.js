const app = require('./src/app')
const connectDB = require('./src/config/db')
const config = require('./config/config')

const startServer = async()=>{
    try {
       await connectDB()
       
       const port = config.port
       app.listen(port, ()=>{
        console.log(`app is running on port ${port}`)
       })
    } catch (error) {
        console.log('error starting server')
        process.exit(1)
    }
}

startServer()