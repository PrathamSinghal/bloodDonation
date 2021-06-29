const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { urlencoded } = require("body-parser");
const path = require("path");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });

require('./db/conn');

const port = process.env.PORT;


// Models
const Register = require("./models/registers");
const Contact = require("./models/contactUs");
const Newsletter = require("./models/newsletter");


// Express Specific Stuff
app.use("/static", express.static("static")); // for serving static files
app.use(express.urlencoded());

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


// Endpoints
// app.get("/", (req, res) => {
//   // const con = 'This is the best content on internet so far, so use it wisely';
//   // const params = {'title':'PubG is the Best Game','content':con};
//   res.status(200).render("home.pug");
// });

// app.get("/home", middleware,(req, res) => {
//   res.status(200).render("home.pug");
// });

// app.get("/donors", (req, res) => {
//   res.status(200).render("donors.pug");
// });

// app.get("/blog", (req, res) => {
//   res.status(200).render("blog.pug");
// });

// app.get("/contact", (req, res) => {
//   res.status(200).render("contact.pug");
// });

// app.get("/about", (req, res) => {
//   res.status(200).render("about.pug");
// });

// app.get("/login", (req, res) => {
//   res.status(200).render("login.pug");
// });

// app.get("/register", (req, res) => {
//   res.status(200).render("registration.pug");
// });

// Post Requests
// app.post('/register', (req,res) => {
//     let myData = new Register(req.body);
//     myData.save().then(() => {
//         res.send('This item has been saved to the database.');
//     }).catch(() => {
//         res.status(400).send('Item has not been saved to the database.');
//     })
// });

// app.post("/register", async (req, res) => {
//   try {
//     const password = req.body.password;
//     const cpassword = req.body.confirmpassword;

//     if (password === cpassword) {
//       const registerdonor = new Register({
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         chooseBloodGroup: req.body.chooseBloodGroup,
//         email: req.body.email,
//         phone: req.body.phone,
//         address: req.body.address,
//         country: req.body.country,
//         state: req.body.state,
//         city: req.body.city,
//         zipcode: req.body.zipcode,
//         password: req.body.password,
//         confirmpassword: req.body.confirmpassword,
//       });

//       const registered = await registerdonor.save();
//       res.status(201).redirect("/home");

//       // let myData = new Register(req.body);
//       // myData.save().then(() => {
//       //     res.status(201).render('home.pug');
//       // }).catch(() => {
//       //     res.status(400).send('Item has not been saved to the database.');
//       // })
//     } else {
//       res.send("password not matched");
//     }
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// app.post("/contact", (req, res) => {
//   let myData = new Contact(req.body);
//   myData
//     .save()
//     .then(() => {
//       res.send("This item has been saved to the database.");
//     })
//     .catch(() => {
//       res.status(400).send("Item has not been saved to the database.");
//     });
// });

// app.post("/home", (req, res) => {
//   let myData = new Newsletter(req.body);
//   myData
//     .save()
//     .then(() => {
//       res.send("This item has been saved to the database.");
//     })
//     .catch(() => {
//       res.status(400).send("Item has not been saved to the database.");
//     });
// });

app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
