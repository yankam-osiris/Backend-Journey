const books = require('../data/books')
const AppError = require('../utils/appError')

const getAllBooks = (req, res)=>{
    res.status(200).json({
        success: true,
        data: books
    })
}

const getBookById = (req, res, next)=>{
    const bookId = req.params.id
    const selectedBook = books.find(book => book.id === Number(bookId))
    if(!selectedBook){
      return next(new AppError('book not found', 404))
    }

    res.status(200).json({
        success:true,
        data: selectedBook
    })
}

module.exports = {getAllBooks, getBookById}