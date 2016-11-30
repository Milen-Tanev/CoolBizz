const express = require('express');

let router = express.Router();

module.exports = function( app, data ) {
let controller = require('../controllers/search-controller')(data);
router
    .get('/search', controller.search);

app.use('/search', router);
}

// let app = require('../config/app-config').app,
//     controller = require('../controllers/search-controller');

// let router = express.Router;

// router
//     .get('/drones', controller.searchDrones)
//     .get('/services', controller.searchServices);

// app.use('/search', router);

// module.exports = router;