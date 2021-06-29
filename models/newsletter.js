const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
    email_subscribe: {
        type: String,
        required: true
    }
});

const newsletter = mongoose.model('newsletter', newsletterSchema);

module.exports = newsletter;