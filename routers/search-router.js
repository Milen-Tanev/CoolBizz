const express = require('express');

let router = express.Router();

module.exports = function(app, data) {
    let controller = require('../controllers/search-controller')(data);

    router
        .get('/search', controller.search)

    app.use('/', router);

};