const express = require('express');

let router = express.Router();

module.exports = function(app, data) {
    let controller = require('../controllers/user-controller')(data);

    router
        .get('/users/:id', controller.getUserDetails);

    app.use('/', router);
};
