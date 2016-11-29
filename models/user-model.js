const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        match: /^\w{5,15}$/
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 15
    },
    firstName: {
        type: String,
        required: true,
        match: /^[A-Z][a-z]{1,10}$/
    },
    lastName: {
        type: String,
        required: true,
        match: /^[A-Z][a-z]{1,10}$/
    },
    email: {
        type: String,
        required: true,
        match: /^\w{5,15}@[a-z]{3,10}\.[a-z]{2,5}$/
    },
    phoneNumber: {
        type: String,
        required: true,
        match: /^\+\d{12}$/
    }
});

module.exports = {
    userSchema,
    User: mongoose.model('User', userSchema)
}