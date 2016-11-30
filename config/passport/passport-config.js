/* globals module require */

const passport = require('passport');

module.exports = function(app, data){
    localStrategy = require('./strategies');

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        if(user){
            done(null, user.id);
        }
    });

    passport.deserializeUser((id, done) => {
        data.findUserById(id)
            .then(user => {
                if (user) {
                    return done(null, false);
                }

                return done(null, false);
            })
            .catch(error => done(error, false));
    });
}