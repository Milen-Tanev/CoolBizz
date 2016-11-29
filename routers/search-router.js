const express = require('express');
let app = require('../config/app-config').app,
    controller = require('../controllers/search-controller');

let router = new express.Router();

router
    .get('/drones', controller.searchDrones)
    .get('/services', controller.searchServices);

app.use('/search', router);

module.exports = router;