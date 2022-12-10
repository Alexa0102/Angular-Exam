const Book = require("../models/Book")


const addBook = async (book, id) => {
    try {
        book.owner = id;
        return await Book.create({...book})
    } catch (error) {
        console.log(error)
        return error
    }
}

const getAllBooks = async () => {
    return await Book.find({})
}

const getOneBook = async (id) => {
    return await Book.findById(id)
}

const editBook = async (id, data) => {
    try {
        return await Book.findByIdAndUpdate(id, {...data}, {runValidators: true})
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllBooks,
    addBook,
    getOneBook,
    editBook,
}