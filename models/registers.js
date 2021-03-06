const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// DEFINE MONGOOSE SCHEMA
const registrationSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    }, 
    lastname: {
         type: String,
         required: true
        },
    chooseBloodGroup:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required:true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    profession_details: {
        type: String,
    },
    education_details: {
        type: String,
    },
    gender_details: {
        type: String,
    },
    date_of_birth_details: {
        type: String,
    },
    religion_id_details: {
        type: String,
    },
    map_details: {
        type: String,
    },
    facebook_details: {
        type: String,
    },
    twitter_details: {
        type: String,
    },
    linkedin_details: {
        type: String,
    },
    pinterest_details: {
        type: String,
    },
    photo_details: {
        type: String,
    },
    description_details: {
        type: String,
    },
    age: {
        type: Number,
    },
});

// We are hashing the passwords
// unique: true

// registrationSchema.pre('save', async function (next) {
//     // console.log("Bcrypt function called");
//     if(this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password , 12);
//         this.confirmpassword = await bcrypt.hash(this.confirmpassword , 12);
//     }
//     next();
// });


const Registration = mongoose.model('Register',registrationSchema);

module.exports = Registration;

