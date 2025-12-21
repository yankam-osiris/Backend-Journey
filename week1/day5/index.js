const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    const url = req.url

    res.statusCode = 200
    res.setHeader('Content-Type', 'text')
    

    if(url === '/'){
        res.end('welcome to my home page')
    }else if(url === '/about'){
        res.end('what do you want to know about me')
    } else if(url === '/buy'){
        res.end('what do you want to buy from me')
    }else {
        res.statusCode = 404
        res.setHeader('content-type', 'text')
        res.end('this page is not found')
    }
})

server.listen(3000, ()=>{
    console.log('server is running')
})
