/* globals module require */

const passport = require('passport');

module.exports = function(app, data){

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
                    done(null, user);
                } else {
                    done(null, false);
                }
            })
            .catch(error => done(error, false));
    });


    require('./strategies')(passport, data);
}