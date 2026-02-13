
const AppError = require('../utils/apperror')

const errorHandler = (err, req, res, next)=>{
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'

    let error = {...err}
    error.message = err.message

    if(err.name === 'CastError'){
        const message = `Invalid ${err.path} : ${err.value}.`
        error = new AppError(message, 400)
    }

    if(err.code === 11000){
        const value = Object.values(err.keyValue)[0];
        const message = `Duplicate value: "${value}". Please use another!`;
        error = new AppError(message, 400);
    }

    if (err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map(el => el.message);
        const message = `Invalid input: ${messages.join('. ')}`;
        error = new AppError(message, 400);
    }

    res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
        // Only show stack trace in development mode
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
}

module.exports = errorHandler 
