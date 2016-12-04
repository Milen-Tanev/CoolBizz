const express = require('express');

let router = express.Router();

module.exports = function(app, data) {
    let controller = require('../controllers/user-controller')(data);

    router
        .get('/modify-profile', controller.getModifyProfileForm)
        .get('/:id', controller.getUserDetails)
        .get('/history/:id',controller.getUserHistory);

    app.use('/', router);
};
