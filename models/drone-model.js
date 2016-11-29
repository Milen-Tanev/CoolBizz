const mongoose = require('mongoose');
const serviceSchema = require('./service-model').serviceSchema;

const droneSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    services: [serviceSchema],
    pricePerDay: {
        type: Number,
        required: true
    },
    startRentDate: [{
        type: Date
    }],
    endRentDate: [{
        type: Date
    }]
});

module.exports = {
    droneSchema,
    Drone: mongoose.model('Drone', droneSchema)
}