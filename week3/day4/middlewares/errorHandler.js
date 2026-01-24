const errorHamdler = (err, req, res, next)=>{
    if(process.env.NODE_ENV === 'development'){
        res.status(err.statusCode).json({
            status: err.status,
            message : err.message,
            stack : err.stack
        })
    }else {
        if(err.isOperational){
            res.status(err.statusCode).json({
                status : err.status,
                message : err.message
            })
        }else {
            console.log('error', err)
            res.status(500).json({
                status : 'error',
                message : 'something went wrong'
            })
        }
    }
}

module.exports = errorHamdler