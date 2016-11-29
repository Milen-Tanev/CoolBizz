const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = {
    serviceSchema,
    Service: mongoose.model('Service', serviceSchema)
};