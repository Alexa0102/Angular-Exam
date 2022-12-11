const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        minlength: [3, 'You should have at least 3 characters!']
    },
    author: {
        required: true,
        type: String,
        minlength: [5, 'You should have at least 5 characters!']
    },
    year: {
        required: true,
        type: Number,
    },
    description: {
        required: true,
        type: String,
        minlength: [10, 'Description should have at least 10 characters!'],
        maxlength: [50, 'Description shouldn\'t have more than 50 characters!'],
    },
    imageUrl: {
        required: true,
        type: String,
    },
    wishingList: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});
bookSchema.method('getWished', function () {
    return this.wishingList.map(x => x._id);
})
const Book = new mongoose.model('Book', bookSchema);
module.exports = Book;