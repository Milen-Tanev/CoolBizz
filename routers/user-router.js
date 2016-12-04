const express = require('express');

let router = express.Router();

module.exports = function(app, data) {
    let controller = require('../controllers/user-controller')(data);

    router
        .get('/modify-profile', controller.getModifyProfileForm)
        .post('/modify-profile', controller.modifyProfile)
        .get('/delete-profile', controller.getDeleteProfileForm)
        .post('/delete-profile', controller.deleteProfile)
        .get('/:id', controller.getUserDetails)
        .get('/history/:id', controller.getUserHistory);

    app.use('/', router);
};
