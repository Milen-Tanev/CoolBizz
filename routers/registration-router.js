const express = require('express');
const app = require('../config/app-config').app;
const controller = require('../controllers/registation-controller');

let router = new express.Router();

router
    .get('/',controller.getRegistration)
    .post('/',controller.register);

app.use('/register',router);

module.exports = router;


