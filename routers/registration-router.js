const express = require('express');

let router = express.Router();

module.exports = function(app, data) {
    let controller = require('../controllers/user-controller')(data);
    router
        .get('/sign-up', controller.getRegistrationForm)
        .post('/sign-up', controller.register);

    app.use('/', router);
};