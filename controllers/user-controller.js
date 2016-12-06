/* globals module */
const errorLogger = require('../config/error-logger'),
    constants = require('../config/constants');

module.exports = function(data) {
    return {
        register(req, res) {
            let {
                username,
                password,
                firstName,
                lastName,
                email,
                phoneNumber
            } = req.body;
            data.createUser(username, password, firstName, lastName, email, phoneNumber)
                .then(() => {
                    return res.status(300).redirect('/sign-in');
                })
                .catch(err => {
                    errorLogger(err);
                    res.status(200).status(constants.invalidInputServerResponse)
                        .send('Please enter valid data');
                });
        },
        signOut(req, res) {
            req.logout();
            res.redirect('/');
        },
        getSignInForm(req, res) {
            return res.status(200).render('users/sign-in', {
                user: req.user
            });
        },
        getRegistrationForm(req, res) {
            return res.status(200).render('users/registration', {
                user: req.user
            });
        },
        getModifyProfileForm(req, res) {
            return res.status(200).render('users/modify-profile', {
                user: req.user
            });
        },
        getDeleteProfileForm(req, res) {
            return res.status(200).render('users/delete-profile', {
                user: req.user
            });
        },
        modifyProfile(req, res) {
            let {
                oldPassword,
                newPassword,
                email,
                phoneNumber
            } = req.body;

            let userId = req.session.passport.user;
            req.logout();
            data.modifyUser(userId, oldPassword, newPassword, email, phoneNumber)
                .then(err => {
                    errorLogger(err);
                    res.status(200).redirect('/');
                })
                .catch(err => {
                    res.status(400)
                        .send(err);
                });
        },
        deleteProfile(req, res) {
            let {
                password
            } = req.body;

            let userId = req.session.passport.user;

            data.deleteUser(userId, password)
                .then((user, err) => {
                    req.logout();
                    res.status(200).redirect('/');
                    errorLogger(err);
                });
        },
        getUserDetails(req, res) {
            return res.status(200).render('users/user-profile', {
                user: req.user
            });
        },
        getUserOrdersHistory(req, res) {
            let userId = req.session.passport.user;
            data.getAllOrders(userId)
                .then(orders => {
                    res.status(200).render('user-history', {
                        orders,
                        user: req.user
                    });
                })
                .catch(err => {
                    res.status(400)
                        .send(err);
                });
        }
    };
};