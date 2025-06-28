const booksData = require("../data/books");
const getAllBooks = async ( require, response, next) => {
    try {
        const books = booksData;
        res.status(200).json({
            success: {message: "You did it"},
            data: {books},
        });
    } catch (error){
        res.status(400).json({
            error: {message: "You've reached an error"},
        });
    }
};


//Create a new arrow function named getBook
const getBook = async (require, response, next) => {
    const id = require.params;
    try{
        const book = booksData.find((book) => book._id === _id);
        response.status(200).json({
            data: { book },
          });

    } catch (error) {
        response.status(400).json({
            error: {message: "Failure Detected"},
        });
    }
}

const createBook = async (require, response, next) => {
    const theBooks = {
        title, author, publisher, genre, pages, rating, synopsis,imageUrl
    };
    response.status(200).json ({
        success: { message: "Book has been created"},
        data: {newBook},

    });
} catch (error) {
    response.sataus(400).json ({error: {message: "book creation failed"}})
}

const updateBook = async (require, response, next) => {
    const {title, author, publisher, genre, pages, rating, synopsis, imageURL} = req.body;
    const _id = req.params;
    try {
        const bookUpdated = {_id, title, author, publisher, genre, pages, rating, synopsis, imageURL};
        res.status(201).json ({
            success: {message: "Book Updated"},
            data: {updatedBook},
        });
    } catch (error){
        res.status(400).json({ error: {message: "Update Failed"}});
    }

};

const deleteBook = async (require, response, next) => {

    const { _id} = req.params;
    try {
        const books = booksData.find((book) => book._id !== _id) ;
        res.status(200).json({
            success: {message: "book deleted"},
            data: {books},
        })
    } catch (error) {
        res.status(400).json ({ error: {message:"Book cannot delete"}})
    }
}


module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook };