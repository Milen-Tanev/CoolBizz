const express = require('express');

let router = express.Router();

module.exports = function( app, data ) {
let controller = require('../controllers/user-controller')(data);
router
    .get('/registration', controller.register);

app.use('user/registration', router);
}
// router
//     .get('/',controller.getRegistration)
//     .post('/',controller.register);

// app.use('/register',router);

// module.exports = router;


