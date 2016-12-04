const mongoose = require('mongoose'),
    historySchema = require('./history-model').historySchema,
    constants = require('../config/constants');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: { unique: true },
        match: [/^\w{5,15}$/, 'The username must have between 5 and 15 characters consisting of letters numbers and _']
    },
    password: {
        type: String,
        required: true,
        minlength: [constants.minLength, 'The password is too short']
    },
    salt: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
        match: [/^[A-Z][a-z]{1,10}$/, 'First name must start with a campital letter']
    },
    lastName: {
        type: String,
        required: true,
        match: [/^[A-Z][a-z]{1,10}$/, 'Last name must start with a capital letter']
    },
    email: {
        type: String,
        required: true,
        match: [/^\w{5,15}@[a-z]{3,10}\.[a-z]{2,5}$/, 'Invalid email']
    },
    phoneNumber: {
        type: String,
        required: true,
        match: [/^\+\d{12}$/, 'Phone numbwer must start with +359']
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    historyOfPurchases: [historySchema],
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    },
    verificationStatus: {
        phone: Boolean,
        email: Boolean
    },
    statistics: {
        flights: {
            total: Number,
            lastFlightTime: Date
        },
        servicesCurrentlyUsing: []
    }
});

module.exports = {
    userSchema,
    User: mongoose.model('User', userSchema)
};