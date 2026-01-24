const express = require('express')
const productRouter = require('./routes/routes')
const errorHandler = require('./middlewares/errorhandler')

const app = express()

app.use(express.json())

app.use('/api/v1/products', productRouter);


app.use(errorHandler)

const PORT = 3000
app.listen(PORT, ()=>{
    console.log('app is running on port ', PORT)
})