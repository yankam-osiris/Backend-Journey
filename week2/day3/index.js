const express = require('express')

const app =  express()

app.use(express.json())

app.get('/home', (req, res)=>{
    res.status(200).json({
      message: 'welcome'
    })
})