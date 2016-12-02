const LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport, data) {
    const authStrategy = new LocalStrategy(
        function(username, password, done) {
            data.findByUsernameAndPassword(username, password)
                .then(user => {
                    if (user && (user.password === password)) {
                        done(null, user);
                    } else {
                        console.log(user);
                        done(null, false);
                    }
                })
                .catch(err => {
                    console.log(err);
                    done(err, false);
                })
        });

    passport.use(authStrategy);
};