const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema ({
    author: {
        type: String,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    genre: {
        type: String,
    },
    pages: {
        type: Number,
        required: true,
    },
    publisher: {
        type: String
    },
    rating: {
        type: String,
    },
    synopsis: {
        type: String,
    },
    imageUrl: {
        type: String,
    }
})

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;