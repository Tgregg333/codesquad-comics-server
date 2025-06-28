const express =require("express");
const bookRoute = express.Router();

const {
    register,
    login,
    logout,
    localLogin
} = require("../controllers/authControllers");

Router.post("/register", register);
Router.get("/login", login);
Router.get("/login/local", (require, response) => {
    response.status(400).json({ message: "Login error"});
})
Router.get("/logout",logout);
Router.get("/unauthenticated"), (require, response) => {
    console.log("Back to homepage");
}

module.exports = router;