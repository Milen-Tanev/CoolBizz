/* globals require module */
const encrypt = require('../config/encrypt'),
    errorLogger = require('../config/error-logger');

module.exports = function(models) {
    let {
        User
    } = models.User;

    return {
        createUser(username, password, firstName, lastName, email, phoneNumber) {

            let salt = encrypt.generateSalt();

            password = encrypt.hashPassword(salt, password);

            let user = new User({
                username,
                password,
                salt,
                firstName,
                lastName,
                email,
                phoneNumber
            });

            return new Promise((resolve, reject) => {
                user.save(err => {
                    if (err) {
                        errorLogger(err);
                        return reject(err);
                    }
                    return resolve(user);
                });
            });
        },
        modifyUser(userId, oldPassword, newPassword, email, phoneNumber) {
            return new Promise((resolve, reject) => {
                User.findOne({
                    _id: userId
                }, (err, user) => {
                    if (encrypt.hashPassword(user.salt, oldPassword) === user.password) {
                        if (newPassword !== '') {
                            let salt = encrypt.generateSalt();
                            let password = encrypt.hashPassword(salt, newPassword);

                            user.update({ salt, password }, () => {
                                if (err) {
                                    errorLogger(err);
                                    return reject(err);
                                }
                                return resolve(user);
                            });
                        }
                        if (email !== '') {
                            user.update({ email }, () => {
                                if (err) {
                                    errorLogger(err);
                                    return reject(err);
                                }
                                return resolve(user);
                            });
                        }
                        if (phoneNumber !== '') {
                            user.update({ phoneNumber }, () => {
                                if (err) {
                                    errorLogger(err);
                                    return reject(err);
                                }
                                return resolve(user);
                            });
                        }
                    }
                });
            });
        },
        deleteUser(userId, password) {
            return new Promise((resolve, reject) => {
                User.findOne({
                    _id: userId
                }, (err, user) => {
                    if (encrypt.hashPassword(user.salt, password) === user.password) {
                        let isDeleted = true;
                        user.update({ isDeleted }, () => {
                            if (err) {
                                errorLogger(err);
                                return reject(err);
                            }
                            return resolve(user);
                        });
                    }
                });
            });
        },
        findByUsername(username) {
            return new Promise((resolve, reject) => {
                User.findOne({
                    username
                }, (err, user) => {

                    if (err) {
                        return reject(err);
                    }
                    return resolve(user);
                });
            });
        },
        findUserById(id) {
            return new Promise((resolve, reject) => {
                User.findOne({
                    _id: id
                }, (err, user) => {
                    if (err) {
                        errorLogger(err);
                        return reject(err);
                    }
                    return resolve(user);
                });
            });
        }
    };
};