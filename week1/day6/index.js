const express = require('express')

const app = express();
const PORT = 3000

app.get('/', (req, res)=>{
    res.send('welcome to our home route')
})

app.get('/about', (req, res)=>{
    res.send('welcome to our about route')
})

app.listen(PORT, ()=>{
    console.log('server is running on port ', PORT)
})