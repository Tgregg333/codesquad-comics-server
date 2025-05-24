const express = require("express"); //Require the following dependencies: express
const app = express(); //Create a const variable called app with the value of express()
const PORT = 8080; //Create a const variable called PORT with the value of 8080
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("node:path");
app.use(morgan("combined"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join_dirname, "public"));




// my routes
app.get("/", (request, response, next) => {
  response.status(200).json({
    success: { message: "This routes to homepage" },
   statusCode: 200,
  });
});

app.get("/api/books", (request, response, next) => {
  response.status(200).json({
    success: { message: "This will send all of the book data"},
    statusCode:200
  });
});

app.get("/api/books/:id", (request, response, next) => {
  response.status(200).json({
    success: { message: "This will send a single book by its id"},
    statusCode:200
  });
});
app.get("/api/books/create/new", (request, response, next) => {
  response.status(200).json({
    success: { message: "This will create a new book"},
    statusCode:200
  });
});
app.get("/api/books/update/:id", (request, response, next) => {
  response.status(200).json({
    success: { message: "This will update a book by its id"},
    statusCode:200
  });
});
app.get("/api/books/delete/:id", (request, response, next) => {
  response.status(200).json({
    success: { message: "This will delete a book by its id"},
    statusCode:200
  });
});



  app.listen(PORT, () => {
    console.log(
      `Server is listening on ${PORT}. Connection established`
    );
    console.log(
      `Visit http://localhost:${PORT}. Connection is established`
    );
  });
  