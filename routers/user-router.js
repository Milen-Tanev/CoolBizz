const express = require('express');

let router = express.Router();

module.exports = function(app, data) {
    let controller = require('../controllers/user-controller')(data);

    router
        .get('/:id', controller.getUserDetails)
        .get('/modify-profile', controller.getModifyProfileForm);

    app.use('/', router);
};
