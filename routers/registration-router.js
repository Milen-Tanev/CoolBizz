const express = require('express');
// const passport = require('passport');
let router = express.Router();

module.exports = function(app, data) {
    let controller = require('../controllers/user-controller')(data);
    router
        .get('/sign-up', controller.getRegistrationForm)
        .post('/sign-up', controller.register)
        //     .post('/sign-in',
        //             passport.authenticate('local', { failureRedirect: '/sign-in' }),
        // (req, res) => res.redirect("/"))

    app.use('/', router);
};

// router
//     .get('/',controller.getRegistration)
//     .post('/',controller.register);

// app.use('/register',router);

// module.exports = router;