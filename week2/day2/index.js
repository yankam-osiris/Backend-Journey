const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    res.json({name: 'osiris'})
})

app.post('/send', (req, res)=>{
    const {name, email} = req.body

    if(!name || !email){
        return res.status(400).json({
            message: 'bad request'
        })
    }
    console.log(name, email)

    res.json({message: 'recieved'})
})
const PORT = 3000

app.listen(PORT, ()=>{
    console.log('app is running')
})