const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { urlencoded, json } = require("body-parser");
const path = require("path");
const express = require("express");
const app = express();
const session = require('express-session');
const flash = require('connect-flash');

dotenv.config({ path: "./config.env" });

require('./db/conn');

const port = process.env.PORT;


// Models
const Register = require("./models/registers");
const Contact = require("./models/contactUs");
const Newsletter = require("./models/newsletter");


// Express Specific Stuff
app.use("/static", express.static("static")); // for serving static files
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
  secret:'geeksforgeeks',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());


// Pug Specific Stuff
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


// Middleware
// const middleware = (req,res,next) => {
//     console.log('Hello my Middleware');
//     next();
// }

// middleware();


// We link the router files to make our route easy
app.use(require('./router/auth'));


app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
