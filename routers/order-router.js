const express = require('express');

let router = express.Router();

module.exports = function(app, data) {
    let controller = require('../controllers/order-controller')(data);

    router
        .get('/create-order', controller.getCreateOrderForm)
        .post('/create-order', controller.createOrder)

    app.use('/', router);
};