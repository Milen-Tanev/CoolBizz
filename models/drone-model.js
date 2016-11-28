const mongoose = require('mongoose');

const droneSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    service: {
        type: String,
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
    droneSchema: droneSchema,
    Drone: mongoose.model('Drone', droneSchema)
}

