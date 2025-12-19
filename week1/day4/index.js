const fs = require('fs')
fs.readFile('osiris.txt', 'utf8', (err, data)=>{
    if(err){
        console.log('error reading file', err.message)
        return ;
    }
   console.log(data)
})

fs.writeFile('ouput.txt', 'my name is toka yankam osiris ok', (err, data)=>{
    if(err){
        console.log('error writing file', err.message)
        return ;
    }
    console.log('data written')
})

fs.readFile('ouput.txt', 'utf8', (err, data)=>{
    if(err){
        console.log('error reading file', err.message)
        return ;
    }
    console.log(data)
})