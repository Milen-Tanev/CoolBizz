const mongoose = require('mongoose');
// const serviceSchema = require('./service-model').serviceSchema;


// db.Services.find({})
let validServices = require('../db/service-provider');

const droneSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    serviceSupported: [{
        type: String,
        enum: validServices
    }],
    pricePerDay: {
        type: Number,
        required: true
    },
    startRentDate: [{
        type: Date
    }],
    endRentDate: [{
        type: Date
    }],
    realtimeNavdata: Boolean,
    altitudeMax: {
        type: Number,
        required: true
    },
    altitudeMin: {
        type: Number,
        required: true
    },
    manufacturer: String,
    latitude: Number,
    longitude: Number,
    maxBitrate: Number,
    videoEnabled: Boolean,
    videoCodec: String,
    videoOnUsb: Boolean,
    VideoSlic: Boolean,
    wifiMode: String,
    wifiRate: String,
    thermalServiceData: {
        sensorType: String,
        nuberOfSensors: Number
    },
    deliveryServiceData: {
        carryLoad: Number
    },
    fireServiceData: {
        typeOfExtinguisher: String,
        quantity: Number
    },
    searchAndRescueService: {
        sensorsTouchType: String,
        microphoneType: String,
        speakersType: String,
        firstAidKitAvailable: Boolean
    },
    logisticsSupportService: {
        distanceToEmitter: Number,
        canFlyWithTeam: Boolean,
        canLeadTeam: Boolean
    }
});

module.exports = {
    droneSchema,
    Drone: mongoose.model('Drone', droneSchema)
};