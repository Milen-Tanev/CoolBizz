const express = require('express');

const passport = require('passport');

let router = express.Router();


module.exports = function( app, data ) {
let controller = require('../controllers/user-controller')(data);

// router
//     .get('/',controller.getLogIn)
//     .post('/',passport.authenticate("local", { failureRedirect: "/login" }),
//             (req, res) => res.redirect("/"))
//     .post("/logOut", controller.logOut);

router
    .get('/sign-up', controller.signUp)
    //.get('/sign-out', controller.signOut)

app.use('/', router);
}