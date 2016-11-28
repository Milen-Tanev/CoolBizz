const express = require('express');
let app = require('../config/app-config').app;

let router = new express.Router();

router
    .get('/sign-up',controller.signUp)
    .get('/log-in',controller.logIn)
    .post('/sign-up',controller.register)
    .post('log-in',passport.authenticate("local", { failureRedirect: "/auth/log-in" }),
            (req, res) => res.redirect("/"))
        .post("/sign-out", controller.signOut);

 app.use("/auth", router);

 module.exports = router;

    
