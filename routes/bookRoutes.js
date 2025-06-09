const express =require("express");
const bookRoute = express.Router()

bookRoute.get("/", (require, response) => {
    response.json({ message: "Get all books" });
  });
  
  bookRoute.get("/:id", (require, response) => {
    response.json({ message: `Get book with ID` });
  });
  
  bookRoute.post("/create/new", (require, response) => {
    response.json({ message: "Create new book" });
  });
  
  bookRoute.put("/edit/:id", (require, response) => {
    response.json({ message: `Edit book with ID` });
  });
  
  bookRouter.delete("/delete/:id", (require, response) => {
    response.json({ message: `Delete book with ID` });
  });
  
  module.exports = bookRouter;