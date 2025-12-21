const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req, res)=>{
    console.log(req.method, req.url)
    res.send('welcome to our app')
})

app.get('/about', (req, res)=>{
    console.log(req.method, req.url)
    res.send('here we get everything t know about our app')
})

app.get('/contact', (req, res)=>{
    console.log(req.method, req.url)
    res.send('contact us on this number: 670624631')
})

app.get('/time', (req, res)=>{
    console.log(req.method, req.url)
    res.send(`this is the current time ${new Date()}`)
})

app.use((req, res)=>{
    res.status(404).send('no route matches')
})

app.listen(PORT, ()=>{
    console.log('app is running on port ', PORT)
})