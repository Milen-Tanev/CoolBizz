const express = require('express');

let router = express.Router();
module.exports = function(app, data) {
let controller = require('../controllers/drones-controller')(data);

router
    .get('/drones', controller.listDrones)
    .get('/drones/:id',controller.getDroneDetails)
    .get('/drones/services',controller.getServices)
    .get('/services/drones/:id',controller.getDroneDetails);

app.use('/',router);
};

