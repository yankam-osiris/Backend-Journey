const express = require('express')
const routes = require('./routes/routes')
const errorHamdler = require('./middlewares/errorHandler')


const app = express()

app.use(express.json())

app.use('/api', routes)


app.use(errorHamdler)

const PORT = 3000
app.listen(PORT, ()=>{
    console.log('server is running on port ', PORT)
})