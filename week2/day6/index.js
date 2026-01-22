const routes = require('./routes /routes')
const express = require('express')
const errorHandler = require('./middleware/errorHandler')

const app = express()

app.use(express.json())

app.use('/api', routes)




app.use(errorHandler)

app.listen(5000, ()=>{
    console.log('server is running on port 5000')
})