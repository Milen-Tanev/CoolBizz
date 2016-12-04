const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: { unique: true }
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = {
    serviceSchema,
    Service: mongoose.model('Service', serviceSchema)
};