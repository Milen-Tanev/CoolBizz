const mongoose = require('mongoose');
const droneSchema = require('./drone-model').droneSchema;

const historySchema = mongoose.Schema({
    drone:droneSchema,
    startDate:new Date,
    endDate:new Date
})

module.exports = {
    historySchema,
    History:mongoose.model('Hisotry',historySchema)
}