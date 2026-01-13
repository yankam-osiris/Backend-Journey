const express = require('express')
const routes = require('./routes/routes')

const app = express()

app.use(express.json())

app.use('/api', routes)

const PORT = 5000

app.listen(PORT, ()=>{
    console.log('app is running on port ', PORT)
})