const Welcome = (req, res)=>{
    res.status(200).json({
        success: true,
        message:'welcome to my page'
    })
}


const post = (req, res)=>{
    const {name, email} = req.body

    if(!name || !email){
        return res.status(400).json({
            success: false,
            message: 'all fields are required'
        })
    }

    res.status(201).json({
        success: true,
        message:'user created successfully'
    })

    console.log(name, email)
}

module.exports = {Welcome, post}