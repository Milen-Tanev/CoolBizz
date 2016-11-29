const express = require('express');
const controller = require('../controllers/login-controller');
const app = require('../config/app-config').app;
const passport = require('passport');

let router = new express.Router();

router
    .get('/',controller.getLogIn)
    .post('/',passport.authenticate("local", { failureRedirect: "/login" }),
            (req, res) => res.redirect("/"))
    .post("/logOut", controller.logOut);

app.use('/login',router);

module.exports = router;
