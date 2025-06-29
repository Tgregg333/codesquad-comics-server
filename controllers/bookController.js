const booksData = require("../data/books");

// const getAllBooks = async ( require, response, next) => {
//     try {
//         const books = booksData;
//         res.status(200).json({
//             success: {message: "You did it"},
//             data: {books},
//         });
//     } catch (error){
//         res.status(400).json({
//             error: {message: "You've reached an error"},
//         });
//     }
// };

const getAllBooks = async (require, response, next) => {
  try {
    const books = booksData;
    res.status(200).json({
      success: { message: "Books Retrieved" },
    });
  } catch (error) {
    next(error);
  }
};

//Create a new arrow function named getBook
// const getBook = async (require, response, next) => {
//     const id = require.params;
//     try{
//         const book = booksData.find((book) => book._id === _id);
//         response.status(200).json({
//             data: { book },
//           });

//     } catch (error) {
//         response.status(400).json({
//             error: {message: "Failure Detected"},
//         });
//     }
// }

const getBook = async (require, response, next) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    res.status(200).json({
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

// const createBook = async (require, response, next) => {
//     const theBooks = {
//         title, author, publisher, genre, pages, rating, synopsis,imageUrl
//     };
//     response.status(200).json ({
//         success: { message: "Book has been created"},
//         data: {newBook},

//     });
// } catch (error) {
//     response.sataus(400).json ({error: {message: "book creation failed"}})
// }

const createBook = async (require, response, next) => {
  const { title, author, publisher, genre, pages, rating, synopsis, imageURL } =
    req.body;
  try {
    const newBook = new Book({
      title,
      author,
      publisher,
      genre,
      pages,
      synopsis,
      imageUrl,
      rating,
    });
    await newBook.save();
    res.status(201).json({
      success: { message: "Book created" },
    });
  } catch (error) {
    next(error);
  }
};

// const updateBook = async (require, response, next) => {
//     const {title, author, publisher, genre, pages, rating, synopsis, imageURL} = req.body;
//     const _id = req.params;
//     try {
//         const bookUpdated = {_id, title, author, publisher, genre, pages, rating, synopsis, imageURL};
//         res.status(201).json ({
//             success: {message: "Book Updated"},
//             data: {updatedBook},
//         });
//     } catch (error){
//         res.status(400).json({ error: {message: "Update Failed"}});
//     }

// };

const updateBook = async (require, response, next) => {
  const { _id } = req.params;
  const { title, author, publisher, genre, pages, rating, synopsis, imageURL } =
    req.body;
  try {
    const updatedBook = await Book.findByIdAndUpdate({ new: true });
    if (!updatedBook) throw new Error("book isnt here");
    res.status(201).json({
      success: { message: "book has been updated" },
    });
  } catch (error) {
    next(error);
  }
};

// const deleteBook = async (require, response, next) => {

//     const { _id} = req.params;
//     try {
//         const books = booksData.find((book) => book._id !== _id) ;
//         res.status(200).json({
//             success: {message: "book deleted"},
//             data: {books},
//         })
//     } catch (error) {
//         res.status(400).json ({ error: {message:"Book cannot delete"}})
//     }
// }

const deleteBook = async (require, response, next) => {
  const { id } = req.params;
  try {
    const deleteBook = await Book.findByIdAndDelete(_id);
    if (!deleteBook) throw new Error("unfound");
    res.status(200).json({
      success: { message: "book has been deleted" },
      data: deletedBook,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook };
