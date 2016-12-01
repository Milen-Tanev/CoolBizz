const express = require('express');

let router = express.Router();
module.exports = function(app, data) {
let controller = require('../controllers/drones-controller')(data);

router
    .get('/', controller.listDrones)
    .get('/:id',controller.getDroneDetails)
    .get('/services',controller.getServices);

app.use('/drones',router);
};

