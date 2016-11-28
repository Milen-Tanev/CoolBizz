const express = require('express');
let app = require('../config/app-config').app;

let router = new express.Router();
let controller = require('../controllers/search-controller');

router.get('/',controller.search);

app.use('/search',router);

module.exports = router;