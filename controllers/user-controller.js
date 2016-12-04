/* globals module */
const errorLogger = require('../config/error-logger');

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
                    return res.redirect('/sign-in');
                });
        },
        signOut(req, res) {
            req.logout();
            res.redirect('/');
        },
        getSignInForm(req, res) {
            return res.render('users/sign-in', {
                user: req.user
            });
        },
        getRegistrationForm(req, res) {
            return res.render('users/registration', {
                user: req.user
            });
        },
        getModifyProfileForm(req, res) {
            return res.render('users/modify-profile', {
                user: req.user
            });
        },
        getDeleteProfileForm(req, res) {
            return res.render('users/delete-profile', {
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
                    res.redirect('/');
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
                    res.redirect('/');
                    errorLogger(err);
                });
        },
        getUserDetails(req, res) {
            return res.render('users/user-profile', {
                user: req.user
            });
        },
        getUserHistory(req, res) {
            let id = req.params.id;
            data.getUserHistory(id).then(history => {
                res.render('users.user-history', {
                    history
                });
            });
        }
    };
};