const express = require('express')
const PORT = 3000

const app = express()

app.use((req, res, next)=>{
   console.log(req.method, req.url)

   next()
})

app.use((req, res, next)=>{
    console.log('my name is toka yankam osiris')

    next()
})

app.get('/',(req, res)=>{
    res.send('welcome to my page')
    console.log('route home')
})

app.get('/about',(req, res)=>{
    res.send('welcome to my about page')
})

app.get('/contact',(req, res)=>{
    res.send('welcome to my contact page')
})

app.use((req, res, next)=>{
  res.status(404).send('route does not exist')
})

app.listen(PORT, ()=>{
    console.log('app is running')
})