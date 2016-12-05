const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderType: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    userId: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = {
    orderSchema,
    Order: mongoose.model('Order', orderSchema)
};