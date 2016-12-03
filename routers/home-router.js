const express = require('express');

let router = express.Router();

module.exports = function(app, data) {
    let controller = require('../controllers/home-controller')(data);
    router
        .get('/', controller.home)
        .get('/home', (res, req) => req.redirect('/'))
        .get('/about-us', controller.information)

    app.use('/', router);
};