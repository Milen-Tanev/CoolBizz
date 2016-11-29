const express = require('express');
const controller = require('../controllers/drones-controller');
const app = require('../config/app-config').app;

let router = new express.Router();

router
    .get('/',controller.listDrones)
    .get('/:id',controller.getDroneDetails);

app.use('/drones',router);

module.exports = router;