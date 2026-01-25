const express = require('express')
const routes = require('./routes/routes')
const errorHandler = require('./middlewares/errorHandler')

const app = express()
app.use(express.json())

app.use('/api/orders', routes)

app.use(errorHandler)

const PORT = 3000
app.listen(PORT, ()=>{
    console.log('app is running on port ', PORT)
})