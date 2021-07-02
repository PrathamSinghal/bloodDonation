const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const session = require('express-session');
const flash = require('connect-flash');
const alert = require('alert');
// const popup = require('popups');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


// Models
const Register = require("../models/registers");
const Contact = require("../models/contactUs");
const Newsletter = require("../models/newsletter");

require("../db/conn");

router.get("/", async (req, res) => {
  // const con = 'This is the best content on internet so far, so use it wisely';
  // const params = {'title':'PubG is the Best Game','content':con};
  var randomnumber = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
  if(randomnumber == 1) {
    randomGroup = `A+`
  }
  else if (randomnumber == 2) {
    randomGroup = `A-`    
  }
  else if (randomnumber == 3) {
    randomGroup = `B+`    
  }
  else if (randomnumber == 4) {
    randomGroup = `B-`    
  }
  else if (randomnumber == 5) {
    randomGroup = `AB+`    
  }
  else if (randomnumber == 6) {
    randomGroup = `AB-`    
  }
  else if (randomnumber == 7) {
    randomGroup = `AB-`    
  }
  else if (randomnumber == 8) {
    randomGroup = `O+`    
  }
  else {
    randomGroup = `O-`
  }
  console.log(randomnumber);
  const result = await Register.find({ chooseBloodGroup: randomGroup }).select({
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
    _id: 1,
  });
  const benificiary = await Register.find({ chooseBloodGroup: `A-` }).select({
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
    _id: 1,
  });
  res.status(200).render("home.pug", {
    personid : result[0]._id,
    nameofperson: result[0].firstname + " " + result[0].lastname,
    bloodgroupofperson: result[0].chooseBloodGroup,
    personid2 : result[1]._id,
    nameofperson2: result[1].firstname + " " + result[1].lastname,
    bloodgroupofperson2: result[1].chooseBloodGroup,
    personid3 : result[2]._id,
    nameofperson3: result[2].firstname + " " + result[2].lastname,
    bloodgroupofperson3: result[2].chooseBloodGroup,
    personid4 : result[3]._id,
    nameofperson4: result[3].firstname + " " + result[3].lastname,
    bloodgroupofperson4: result[3].chooseBloodGroup,
    beneficiaryid1 : benificiary[0]._id,
    benificiaryname1 : benificiary[0].firstname + " " + benificiary[0].lastname,
    benificiaryblood1: benificiary[0].chooseBloodGroup,
    beneficiaryid2 : benificiary[1]._id,
    benificiaryname2 : benificiary[1].firstname + " " + benificiary[1].lastname,
    benificiaryblood2: benificiary[1].chooseBloodGroup,
    beneficiaryid3 : benificiary[2]._id,
    benificiaryname3 : benificiary[2].firstname + " " + benificiary[2].lastname,
    benificiaryblood3: benificiary[2].chooseBloodGroup,
    beneficiaryid4 : benificiary[3]._id,
    benificiaryname4 : benificiary[3].firstname + " " + benificiary[3].lastname,
    benificiaryblood4: benificiary[3].chooseBloodGroup,

  });
  // res.status(200).render("home.pug");
  // console.log(`from router`);
});

router.get("/home", async (req, res) => {
  var randomnumber = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
  if(randomnumber == 1) {
    randomGroup = `A+`
  }
  else if (randomnumber == 2) {
    randomGroup = `A-`    
  }
  else if (randomnumber == 3) {
    randomGroup = `B+`    
  }
  else if (randomnumber == 4) {
    randomGroup = `B-`    
  }
  else if (randomnumber == 5) {
    randomGroup = `AB+`    
  }
  else if (randomnumber == 6) {
    randomGroup = `AB-`    
  }
  else if (randomnumber == 7) {
    randomGroup = `AB-`    
  }
  else if (randomnumber == 8) {
    randomGroup = `O+`    
  }
  else {
    randomGroup = `O-`
  }
  console.log(randomnumber);
  const result = await Register.find({ chooseBloodGroup: randomGroup }).select({
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
    _id: 1,
  });
  const benificiary = await Register.find({ chooseBloodGroup: `A-` }).select({
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
    _id: 1,
  });
  res.status(200).render("home.pug", {
    personid : result[0]._id,
    nameofperson: result[0].firstname + " " + result[0].lastname,
    bloodgroupofperson: result[0].chooseBloodGroup,
    personid2 : result[1]._id,
    nameofperson2: result[1].firstname + " " + result[1].lastname,
    bloodgroupofperson2: result[1].chooseBloodGroup,
    personid3 : result[2]._id,
    nameofperson3: result[2].firstname + " " + result[2].lastname,
    bloodgroupofperson3: result[2].chooseBloodGroup,
    personid4 : result[3]._id,
    nameofperson4: result[3].firstname + " " + result[3].lastname,
    bloodgroupofperson4: result[3].chooseBloodGroup,
    beneficiaryid1 : benificiary[0]._id,
    benificiaryname1 : benificiary[0].firstname + " " + benificiary[0].lastname,
    benificiaryblood1: benificiary[0].chooseBloodGroup,
    beneficiaryid2 : benificiary[1]._id,
    benificiaryname2 : benificiary[1].firstname + " " + benificiary[1].lastname,
    benificiaryblood2: benificiary[1].chooseBloodGroup,
    beneficiaryid3 : benificiary[2]._id,
    benificiaryname3 : benificiary[2].firstname + " " + benificiary[2].lastname,
    benificiaryblood3: benificiary[2].chooseBloodGroup,
    beneficiaryid4 : benificiary[3]._id,
    benificiaryname4 : benificiary[3].firstname + " " + benificiary[3].lastname,
    benificiaryblood4: benificiary[3].chooseBloodGroup,

  });

  // console.log(result);
  // console.log(result[0].firstname + " " + result[0].lastname);
  // nameofperson = result[0].firstname;
});

router.get("/donordetail/:id", async (req,res) => {
  const result = await Register.find({ _id : req.params.id }).select({
    _id: 1,
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
    phone: 1,
    address: 1,
    country: 1,
    state: 1,
    city: 1,
    zipcode: 1,
    age: 1,
    email: 1,
    profession_details: 1,
    education_details: 1,
    gender_details: 1,
    date_of_birth_details: 1,
    religion_id_details: 1,
    map_details: 1,
    facebook_details: 1,
    twitter_details: 1,
    linkedin_details: 1,
    pinterest_details: 1,
    photo_details: 1,
    description_details: 1,
  });
  console.log(result);
  res.status(200).render("donordetails.pug", {
    nameofperson: result[0].firstname + " " + result[0].lastname,
    bloodgroupofperson: result[0].chooseBloodGroup,
    phone: result[0].phone,
    address: result[0].address,
    country: result[0].country,
    state: result[0].state,
    city: result[0].city,
    zipcode: result[0].zipcode,
    age: result[0].age,
    email: result[0].email,
    pinterest_details: result[0].pinterest_details,
    date_of_birth_details: result[0].date_of_birth_details,
    description_details: result[0].description_details,
    education_details: result[0].education_details,
    facebook_details: result[0].facebook_details,
    gender_details: result[0].gender_details,
    linkedin_details: result[0].linkedin_details,
    map_details: result[0].map_details,
    photo_details: result[0].photo_details,
    profession_details: result[0].profession_details,
    religion_id_details: result[0].religion_id_details,
    twitter_details: result[0].twitter_details,

  }
  );
  // console.log(map_details.src);
})

router.get("/donors", async (req, res) => {
  var randomnumber = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
  if(randomnumber == 1) {
    randomGroup = `A+`
  }
  else if (randomnumber == 2) {
    randomGroup = `A-`    
  }
  else if (randomnumber == 3) {
    randomGroup = `B+`    
  }
  else if (randomnumber == 4) {
    randomGroup = `B-`    
  }
  else if (randomnumber == 5) {
    randomGroup = `AB+`    
  }
  else if (randomnumber == 6) {
    randomGroup = `AB-`    
  }
  else if (randomnumber == 7) {
    randomGroup = `AB-`    
  }
  else if (randomnumber == 8) {
    randomGroup = `O+`    
  }
  else {
    randomGroup = `O-`
  }
  console.log(randomnumber);
  const result = await Register.find({ chooseBloodGroup: randomGroup }).select({
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
    _id: 1,
  });
  res.status(200).render("donors.pug", {
    donorid1: result[0]._id,
    donorname1: result[0].firstname + " " + result[0].lastname,
    donorbloodgroup1: result[0].chooseBloodGroup,
    donorid2: result[1]._id,
    donorname2: result[1].firstname + " " + result[1].lastname,
    donorbloodgroup2: result[1].chooseBloodGroup,
    donorid3: result[2]._id,
    donorname3: result[2].firstname + " " + result[2].lastname,
    donorbloodgroup3: result[2].chooseBloodGroup,
    donorid4: result[3]._id,
    donorname4: result[3].firstname + " " + result[3].lastname,
    donorbloodgroup4: result[3].chooseBloodGroup,
  });
});

router.get("/blog", (req, res) => {
  // const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
  // console.log(dom.window.document); // "Hello world"
  // req.flash('message', 'Success!!');
  // res.redirect('/contact');
  // popup.alert({
  //   content: 'Hello!'
  // });
  // popup.window({
  //   mode: 'alert',
  //   content: 'Hey'
  // });
  // alert("message");
  // console.log(global);
  // alert('hi');
  res.status(200).render("blog.pug");
});

router.get("/contact", (req, res) => {
  // res.send(req.flash('message'));
  res.status(200).render("contact.pug");
});

router.get("/about", (req, res) => {
  res.status(200).render("about.pug");
});

router.get("/login", (req, res) => {
  res.status(200).render("login.pug");
});

router.get("/register", (req, res) => {
  res.status(200).render("registration.pug");
});

router.get("/searchresult/:id", async (req, res) => {
  // res.status(200).render("searchresult.pug");
  // let bloodgroupsearchquery = req.query.bloodgroup;
  const result = await Register.find({ chooseBloodGroup: req.params.id }).select({
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
    _id: 1,
  });
  res.status(200).render("searchresult.pug", {
    personid: result[0]._id,
    nameofperson: result[0].firstname + " " + result[0].lastname,
    bloodgroupofperson: result[0].chooseBloodGroup,
    personid2: result[1]._id,
    nameofperson2: result[1].firstname + " " + result[1].lastname,
    bloodgroupofperson2: result[1].chooseBloodGroup,
    personid3: result[2]._id,
    nameofperson3: result[2].firstname + " " + result[2].lastname,
    bloodgroupofperson3: result[2].chooseBloodGroup,
  });
  console.log(result);

  // console.log(req.query.bloodgroup);
});

router.get("/dashboard/:id", async (req, res) => {
  const user = await Register.find({ _id: req.params.id }).select({
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
    _id: 1,
  });
  console.log(user);
  res.status(200).render("dashboard.pug", {
    userid : user[0]._id,
    nameofperson: user[0].firstname + " " + user[0].lastname,
  });
});

router.get("/adddetails/:id", async (req, res) => {
  const user = await Register.find({ _id: req.params.id }).select({
    _id: 1,
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
    phone: 1,
    address: 1,
    country: 1,
    state: 1,
    city: 1,
    zipcode: 1,
    age: 1,
    email: 1,
    profession_details: 1,
    education_details: 1,
    gender_details: 1,
    date_of_birth_details: 1,
    religion_id_details: 1,
    map_details: 1,
    facebook_details: 1,
    twitter_details: 1,
    linkedin_details: 1,
    pinterest_details: 1,
    photo_details: 1,
    description_details: 1,
  });
  console.log(user);
  res.status(200).render("adddetails.pug", {
    userid : user[0]._id,
    nameofperson: user[0].firstname + " " + user[0].lastname,
    bloodgroupofperson: user[0].chooseBloodGroup,
    phone: user[0].phone,
    address: user[0].address,
    country: user[0].country,
    state: user[0].state,
    city: user[0].city,
    zipcode: user[0].zipcode,
    age: user[0].age,
    email: user[0].email,
    profession_details: user[0].profession_details,
    education_details: user[0].education_details,
    gender_details: user[0].gender_details,
    date_of_birth_details: user[0].date_of_birth_details,
    religion_id_details: user[0].religion_id_details,
    map_details: user[0].map_details,
    facebook_details: user[0].facebook_details,
    twitter_details: user[0].twitter_details,
    linkedin_details: user[0].linkedin_details,
    pinterest_details: user[0].pinterest_details,
    photo_details: user[0].photo_details,
    description_details: user[0].description_details,
  });
  // res.status(200).render("adddetails.pug");
});


// router.get("/searchresult/A-", async (req, res) => {
//   const result = await Register.find({ chooseBloodGroup: `A-` }).select({
//     firstname: 1,
//     lastname: 1,
//     chooseBloodGroup: 1,
//   });
//   res.status(200).render("searchresult.pug", {
//     nameofperson: result[0].firstname + " " + result[0].lastname,
//     bloodgroupofperson: result[0].chooseBloodGroup,
//     nameofperson2: result[1].firstname + " " + result[1].lastname,
//     bloodgroupofperson2: result[1].chooseBloodGroup,
//     nameofperson3: result[2].firstname + " " + result[2].lastname,
//     bloodgroupofperson3: result[2].chooseBloodGroup,
//   });
//   console.log(result);
// });
// router.get("/searchresult/BO%2B", async (req, res) => {
//   // res.status(200).render("searchresult.pug");
//   // let bloodgroupsearchquery = req.query.bloodgroup;
//   const result = await Register.find({ chooseBloodGroup: `B+` }).select({
//     firstname: 1,
//     lastname: 1,
//     chooseBloodGroup: 1,
//   });
//   res.status(200).render("searchresult.pug", {
//     nameofperson: result[0].firstname + " " + result[0].lastname,
//     bloodgroupofperson: result[0].chooseBloodGroup,
//     nameofperson2: result[1].firstname + " " + result[1].lastname,
//     bloodgroupofperson2: result[1].chooseBloodGroup,
//     nameofperson3: result[2].firstname + " " + result[2].lastname,
//     bloodgroupofperson3: result[2].chooseBloodGroup,
//   });
//   console.log(result);

//   // console.log(bloodgroupsearchquery);
// });
// router.get("/searchresult/B-", async (req, res) => {
//   // res.status(200).render("searchresult.pug");
//   // let bloodgroupsearchquery = req.query.bloodgroup;
//   const result = await Register.find({ chooseBloodGroup: `B-` }).select({
//     firstname: 1,
//     lastname: 1,
//     chooseBloodGroup: 1,
//   });
//   res.status(200).render("searchresult.pug", {
//     nameofperson: result[0].firstname + " " + result[0].lastname,
//     bloodgroupofperson: result[0].chooseBloodGroup,
//     nameofperson2: result[1].firstname + " " + result[1].lastname,
//     bloodgroupofperson2: result[1].chooseBloodGroup,
//     nameofperson3: result[2].firstname + " " + result[2].lastname,
//     bloodgroupofperson3: result[2].chooseBloodGroup,
//   });
//   console.log(result);

//   // console.log(req.query.bloodgroup);
// });
// router.get("/searchresult/ABO%2B", async (req, res) => {
//   // res.status(200).render("searchresult.pug");
//   // let bloodgroupsearchquery = req.query.bloodgroup;
//   const result = await Register.find({ chooseBloodGroup: `AB+` }).select({
//     firstname: 1,
//     lastname: 1,
//     chooseBloodGroup: 1,
//   });
//   res.status(200).render("searchresult.pug", {
//     nameofperson: result[0].firstname + " " + result[0].lastname,
//     bloodgroupofperson: result[0].chooseBloodGroup,
//     nameofperson2: result[1].firstname + " " + result[1].lastname,
//     bloodgroupofperson2: result[1].chooseBloodGroup,
//     nameofperson3: result[2].firstname + " " + result[2].lastname,
//     bloodgroupofperson3: result[2].chooseBloodGroup,
//   });
//   console.log(result);

//   // console.log(req.query.bloodgroup);
// });
// router.get("/searchresult/AB-", async (req, res) => {
//   // res.status(200).render("searchresult.pug");
//   // let bloodgroupsearchquery = req.query.bloodgroup;
//   const result = await Register.find({ chooseBloodGroup: `AB-` }).select({
//     firstname: 1,
//     lastname: 1,
//     chooseBloodGroup: 1,
//   });
//   res.status(200).render("searchresult.pug", {
//     nameofperson: result[0].firstname + " " + result[0].lastname,
//     bloodgroupofperson: result[0].chooseBloodGroup,
//     nameofperson2: result[1].firstname + " " + result[1].lastname,
//     bloodgroupofperson2: result[1].chooseBloodGroup,
//     nameofperson3: result[2].firstname + " " + result[2].lastname,
//     bloodgroupofperson3: result[2].chooseBloodGroup,
//   });
//   console.log(result);

//   // console.log(req.query.bloodgroup);
// });
// router.get("/searchresult/OO%2B", async (req, res) => {
//   // res.status(200).render("searchresult.pug");
//   // let bloodgroupsearchquery = req.query.bloodgroup;
//   const result = await Register.find({ chooseBloodGroup: `O+` }).select({
//     firstname: 1,
//     lastname: 1,
//     chooseBloodGroup: 1,
//   });
//   res.status(200).render("searchresult.pug", {
//     nameofperson: result[0].firstname + " " + result[0].lastname,
//     bloodgroupofperson: result[0].chooseBloodGroup,
//     nameofperson2: result[1].firstname + " " + result[1].lastname,
//     bloodgroupofperson2: result[1].chooseBloodGroup,
//     nameofperson3: result[2].firstname + " " + result[2].lastname,
//     bloodgroupofperson3: result[2].chooseBloodGroup,
//   });
//   console.log(result);

//   // console.log(req.query.bloodgroup);
// });
// router.get("/searchresult/O-", async (req, res) => {
//   // res.status(200).render("searchresult.pug");
//   // let bloodgroupsearchquery = req.query.bloodgroup;
//   const result = await Register.find({ chooseBloodGroup: `O-` }).select({
//     firstname: 1,
//     lastname: 1,
//     chooseBloodGroup: 1,
//   });
//   res.status(200).render("searchresult.pug", {
//     nameofperson: result[0].firstname + " " + result[0].lastname,
//     bloodgroupofperson: result[0].chooseBloodGroup,
//     nameofperson2: result[1].firstname + " " + result[1].lastname,
//     bloodgroupofperson2: result[1].chooseBloodGroup,
//     nameofperson3: result[2].firstname + " " + result[2].lastname,
//     bloodgroupofperson3: result[2].chooseBloodGroup,
//   });
//   // console.log(result);

//   // console.log(req.query.bloodgroup);
// });

// Post Requests

router.post("/register", (req, res) => {
  const {
    firstname,
    lastname,
    chooseBloodGroup,
    email,
    phone,
    address,
    country,
    state,
    city,
    zipcode,
    password,
    confirmpassword,
  } = req.body;

  if (
    (!firstname ||
      !lastname ||
      !chooseBloodGroup ||
      !email ||
      !phone ||
      !address ||
      !country ||
      !state,
    !city || !zipcode || !password || !confirmpassword)
  ) {
    alert("Please fill the fields properly");
    return res.status(422).redirect('/register');
    // return res.status(422).json({ error: "Please fill the fields properly" });
  }

  Register.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        alert("email already exist");
        return res.status(422).redirect('/register');
        // return res.status(422).json({ error: "email already exist" });
      } else {
        // const password = req.body.password;
        // const confirmpassword = req.body.confirmpassword;

        if (password === confirmpassword) {
          // now bcrypt the password here(hashing)
          // save method ko call karne se pehle ham ise call karenge.
          // for that we use pre and post method
          // uske andar hum type of event ko call karenge.
          // or callback functiion ke andar mai password ko hash karunga
          // lekin isko likhenge kidhar... uske liye registrationschema pee jaana padega.

          let myData = new Register({
            firstname: firstname,
            lastname: lastname,
            chooseBloodGroup: chooseBloodGroup,
            email: email,
            phone: phone,
            address: address,
            country: country,
            state: state,
            city: city,
            zipcode: zipcode,
            password: password,
            confirmpassword: confirmpassword
          });

          console.log(myData);
          myData
            .save()
            .then(() => {
              alert("User Registered Successfully");
              res.status(201).redirect('/login');
            })
            .catch((err) => {
              alert("Item has not been saved to the database.");
              res.status(400).redirect('/register');
              // res.status(400).send("Item has not been saved to the database.");
            });
        } else {
          alert("Password does not match.");
          res.status(400).redirect('/register');
          // res.status(400).send("Password does not match.");
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/login", async (req, res) => {
  // console.log(req.body);
  // res.redirect('/login');
  const { email, password } = req.body;
  if (!email || !password) {
    alert('Please fill the Data properly');
    return res.status(422).redirect(`/login`);
    // return res.status(422).json({ error: "Please fill the Data properly" });
  }


  const user = await Register.find({
    $and: [
      { email: email },
      { password: password },
    ]
  }).select({
    // firstname: 1,
    // lastname: 1,
    // chooseBloodGroup: 1,
    // country: 1,
    // city: 1,
    // state: 1,
    _id: 1,
  });
  // console.log(user);
  
  const useLogin = Register.findOne({ email: email, password: password })
  .then((userExist) => {
    // const isMatch = bcrypt.compare(password, useLogin.password);
    // console.log(email);
    // console.log(password);
    // const userid = Register.findOne({email:email, password:password}).select({email: 1, password: 1, _id: 1,});
    // console.log(user[0]._id);
    if (userExist) {
      // return req.alert('hi');
      alert('Login Successfully');
      return res.status(200).redirect(`/dashboard/`+user[0]._id);
    } else {
      // console.log('user not exist');
      alert("user not exist");
      return res.status(422).redirect(`/login`);
      // return res.status(200).json({ error: "user not exist" });
    }
  })
  .catch((err) => {
    console.log(err);
    });
    // console.log(useLogin);
  // const isMatch = bcrypt.compare(password, password)
});

router.post("/searchresult", async (req, res) => {
  // const searchresult = req.body;
  // bloodgroup = searchresult.bloodgroup;
  // country = searchresult.country;
  // city = searchresult.city;
  
  const { state , city , bloodgroup } = req.body;
  console.log(req.body);
  
  if(!state || !city || !bloodgroup) {
    alert("Please fill the Data properly");
    return res.status(422).redirect(`/home`);
    // return res.status(422).json({ error: "Please fill the Data properly" });
  }
  
  
  // console.log(searchresult.length);
  // let count = -1;
  // for (var c in searchresult) {
  //   count = count + 1;
  // }
  // console.log(count);

  // if(count == 3) {
  //   console.log('Count is 3');
  // } else if (count == 2) {
  //   console.log('cpint is 2');
  // }
  // else{
  //   console.log('count is 1');
  // }

  // console.log(searchresult.city);
  // res.json({data:'Search successfully'});
  const result = await Register.find({
    $and: [
      { chooseBloodGroup: bloodgroup },
      { state: state },
      { city: city },
    ]
  }).select({
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
    country: 1,
    city: 1,
    state: 1,
    _id: 1,
  });
  console.log(result.length);
  if (!result.length) {
    // console.log('Empty Data');
    alert('Blood Group not available.');
    res.status(422).redirect(`/home`);
    // res.status(400).json({error: 'Blood Group not available.'});
    // res.setTimeout(res.redirect('/home'),2000);
    
  } else {
    if(result[0].chooseBloodGroup) {
      if (result.length == 1) {
        res.status(200).render("searchresult.pug", {
          personid: result[0]._id,
          nameofperson: result[0].firstname + " " + result[0].lastname,
          bloodgroupofperson: result[0].chooseBloodGroup,
          displaynone: `display: none;`,
          // personid2: result[1]._id,
          // nameofperson2: result[1].firstname + " " + result[1].lastname,
          // bloodgroupofperson2: result[1].chooseBloodGroup,
          // personid3: result[2]._id,
          // nameofperson3: result[2].firstname + " " + result[2].lastname,
          // bloodgroupofperson3: result[2].chooseBloodGroup,
        });
      } else if (result.length == 2) {
        res.status(200).render("searchresult.pug", {
          personid: result[0]._id,
          nameofperson: result[0].firstname + " " + result[0].lastname,
          bloodgroupofperson: result[0].chooseBloodGroup,
          personid2: result[1]._id,
          nameofperson2: result[1].firstname + " " + result[1].lastname,
          bloodgroupofperson2: result[1].chooseBloodGroup,
          displaynone1: `display: none;`,
          // personid3: result[2]._id,
          // nameofperson3: result[2].firstname + " " + result[2].lastname,
          // bloodgroupofperson3: result[2].chooseBloodGroup,
        });
      } else if (result.length == 3) {
        res.status(200).render("searchresult.pug", {
          personid: result[0]._id,
          nameofperson: result[0].firstname + " " + result[0].lastname,
          bloodgroupofperson: result[0].chooseBloodGroup,
          personid2: result[1]._id,
          nameofperson2: result[1].firstname + " " + result[1].lastname,
          bloodgroupofperson2: result[1].chooseBloodGroup,
          personid3: result[2]._id,
          nameofperson3: result[2].firstname + " " + result[2].lastname,
          bloodgroupofperson3: result[2].chooseBloodGroup,
        });
      } else {
        res.status(200).render("searchresult.pug", {
          personid: result[0]._id,
          nameofperson: result[0].firstname + " " + result[0].lastname,
          bloodgroupofperson: result[0].chooseBloodGroup,
          // personid2: result[1]._id,
          // nameofperson2: result[1].firstname + " " + result[1].lastname,
          // bloodgroupofperson2: result[1].chooseBloodGroup,
          // personid3: result[2]._id,
          // nameofperson3: result[2].firstname + " " + result[2].lastname,
          // bloodgroupofperson3: result[2].chooseBloodGroup,
        });
      }
    } else{
      alert('Blood Group not available.');
      res.status(422).redirect(`/home`);
      // res.status(400).json({error: 'Blood Group not available.'})
    }
  }
  // console.log(result);




});

router.post("/contact", (req, res) => {
  let myData = new Contact(req.body);
  myData
    .save()
    .then(() => {
      alert('This item has been saved to the database.');
      res.status(200).redirect(`/home`);
      // res.send("This item has been saved to the database.");
    })
    .catch(() => {
      alert('This item has been saved to the database.');
      res.status(400).redirect(`/home`);
      // res.status(400).send("Item has not been saved to the database.");
    });
});

router.post("/home", (req, res) => {
  let myData = new Newsletter(req.body);
  myData
    .save()
    .then(() => {
      alert('This item has been saved to the database.');
      res.status(400).redirect(`/home`);
      // res.send("This item has been saved to the database.");
    })
    .catch(() => {
      alert('This item has not been saved to the database.');
      res.status(400).redirect(`/home`);
      // res.status(400).send("Item has not been saved to the database.");
    });
});

router.post("/adddetails/:id", async (req, res) => {
  // const userpost = await Register.find({ chooseBloodGroup: req.params.id }).select({
  //   firstname: 1,
  //   lastname: 1,
  //   chooseBloodGroup: 1,
  //   _id: 1,
  // });
  // console.log(userpost);
  const {
    firstname,
    chooseBloodGroup,
    phone,
    address,
    country,
    state,
    city,
    zipcode,
    age,
    profession_details,
    education_details,
    gender_details,
    date_of_birth_details,
    religion_id_details,
    map_details,
    facebook_details,
    twitter_details,
    linkedin_details,
    pinterest_details,
    photo_details,
    description_details,
  } = req.body;
  console.log(req.body);
  const _id = req.params.id;
  // console.log(_id);
  let updateProfile = await Register.updateOne({_id},{
    $set : {
      firstname : firstname,
      chooseBloodGroup : chooseBloodGroup,
      phone : phone,
      address : address,
      country : country,
      state : state,
      city : city,
      zipcode : zipcode,
      age: age,
      profession_details : profession_details,
      education_details : education_details,
      gender_details : gender_details,
      date_of_birth_details : date_of_birth_details,
      religion_id_details : religion_id_details,
      map_details : map_details,
      facebook_details : facebook_details,
      twitter_details : twitter_details,
      linkedin_details : linkedin_details,
      pinterest_details : pinterest_details,
      photo_details : photo_details,
      description_details : description_details,
    }
  }).then(() => {
    alert("Profile Updated Successfully");
    res.status(201).redirect(`/dashboard/`+_id);
  })
  .catch((err) => {
    res.status(400).send("There is an issue while updating the profile.");
  });;
  // const updateUser = async (_id) => {
  //   console.log(_id);
  //   try {
  //     console.log(_id);
  //     const result = await Register.updateOne({_id},{
  //       $set : {
  //         lastname : "lastupdatetest"
  //       }
  //     });
      console.log(updateProfile);
  //   } catch {
  //     console.log(err);
  //   }
  // }
  // updateUser();
});

module.exports = router;
