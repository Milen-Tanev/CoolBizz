/* globals require module */

const LocalStrategy = require('passport-local').Strategy,
    encrypt = require('../../encrypt');

module.exports = function (passport, data) {

    function authenticate(user, password) {
        return encrypt.hashPassword(user.salt, password) === user.password;
    }

    const authStrategy = new LocalStrategy(
        (username, password, done) => {
            data.findByUsername(username)
                .then(user => {
                    if (user && authenticate(user, password) && user.isDeleted.toString() === 'false') {
                        done(null, user);
                    } else {
                        done(null, false);
                    }
                })
                .catch(err => {
                    done(err, false);
                });
        });

    passport.use(authStrategy);
};