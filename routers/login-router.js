const express = require('express');

const passport = require('passport');

let router = express.Router();

module.exports = function(app, data) {
    let controller = require('../controllers/user-controller')(data);

    router
        .get('/sign-in', controller.getSignInForm)
        .post('/sign-in', passport.authenticate('local', { failureRedirect: '/sign-up' }), (req, res) => res.redirect('/'))
        .post('/sign-out', controller.signOut);

    app.use('/', router);
}