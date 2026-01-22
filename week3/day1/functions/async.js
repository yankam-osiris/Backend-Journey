const mockData = require('../data/mockData')

const delayData = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(mockData)
        }, 3000)
    })
}

const logData = async()=>{
    console.log('start log')
    
    const data = await delayData()
   console.log(data)

    console.log('ending log')
}

logData()