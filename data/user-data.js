/* globals require module */
const encrypt = require('../config/encrypt');

module.exports = function(models) {
    let {
        User
    } = models.User;

    return {
        createUser(username, password, firstName, lastName, email, phoneNumber) {

            var salt = encrypt.generateSalt();

            password = encrypt.hashPassword(salt, password );

            let user = new User({ username, password, salt, firstName, lastName, email, phoneNumber });

            return new Promise((resolve, reject) => {
                user.save(err => {
                    if (err) {
                        console.log(err);
                        return reject(err);
                    }
                    //console.log(user);
                    return resolve(user);
                });
            });
        },
        modifyUser(user, password, email, phoneNumber) {
            return new Promise((resolve, reject) => {
                if (password) {
                    user.update({ password }, err => {
                        if (err) {
                            return reject(err);
                        }
                        return resolve(user);
                    });
                }
                if (email) {
                    user.update({ email }, err => {
                        if (err) {
                            return reject(err);
                        }
                        return resolve(user);
                    });
                }
                if (phoneNumber) {
                    user.update({ phoneNumber }, err => {
                        if (err) {
                            return reject(err);
                        }
                        return resolve(user);
                    });
                }
            });
        },
        findByUsername(username) {
            return new Promise((resolve, reject) => {
                User.findOne({ username }, (err, user) => {

                    if (err) {
                        return reject(err);
                    }
                    return resolve(user);
                });
            });
        },
        findUserById(id) {
            return new Promise((resolve, reject) => {
                User.findOne({ _id: id }, (err, user) => {
                    if (err) {
                        console.log(err);
                        return reject(err);
                    }
                    return resolve(user);
                });
            });
        },
        getAllUsers() {
            return new Promise((resolve, reject) => {
                User.find()
                    .exec((err, powers) => {
                        if (err) {
                            return reject(err);
                        }
                        return resolve(powers);
                    });
            });
        }
    };
};