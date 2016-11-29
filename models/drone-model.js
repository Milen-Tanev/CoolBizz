const mongoose = require('mongoose');
// const serviceSchema = require('./service-model').serviceSchema;


// db.Services.find({})
let validServices = [
    'High-resolution photo & video',
    'Thermal inspection via sensors',
    'Supply Deliveries',
    'Fire Response',
    'Search and Rescue Operations',
    'Chemical, Biological, Radiological, Nuclear, or Explosive(CBRNE) Event',
    'Logistics Support',
    'Disaster recovery'
];

const droneSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    serviceSupported: {
        type: String,
        enum: validServices
    },
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
};