const mongoose = require('mongoose');
const droneSchema = require('./drone-model').droneSchema;

const historySchema = new mongoose.Schema({
    drone:droneSchema,
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    }
})

module.exports = {
    historySchema,
    History:mongoose.model('Hisotry',historySchema)
}