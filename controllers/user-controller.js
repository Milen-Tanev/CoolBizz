/* globals module */

module.exports = function(data) {
    return {
        name: 'authentication',
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
        modifyProfile(req, res) {
            let {
                id,
                password,
                email,
                phoneNumber
            } = req.body;
            data.modifyUser(id, password, email, phoneNumber)
                .then(() => {
                    return res.render('/');
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
                res.render('users.user-history',{
                    history:history
                });
            })
        }
    };
};