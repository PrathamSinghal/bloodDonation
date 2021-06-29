const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    visitor_name: {
        type: String,
        required: true
    },
    visitor_phone: {
        type: String,
        required: true
    },
    visitor_email: {
        type: String,
        required: true
    },
    visitor_comment:{
        type: String,
        required: true
    }
});

const contact = mongoose.model('contact',contactSchema);

module.exports = contact;