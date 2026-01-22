const express = require('express')
const routes = require('./routes/routes')
const errorHandler = require('./middleware/errorHandler')

const app = express()

app.use(express.json())

app.use('/api', routes)

app.use(errorHandler)

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})