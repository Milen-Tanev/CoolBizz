const express = require('express');

let router = express.Router();

module.exports = function( app, data ) {
let controller = require('../controllers/user-controller')(data);
router
    .get('/sign-up', controller.register);

app.use('/', router);
}

// router
//     .get('/',controller.getRegistration)
//     .post('/',controller.register);

// app.use('/register',router);

// module.exports = router;


