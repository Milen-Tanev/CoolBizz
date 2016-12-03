/* globals module */

module.exports = function(data) {
    return {
        name: 'authentication',
        register(req, res) {
            let { username, password, firstName, lastName, email, phoneNumber } = req.body;
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
        getUserDetails(req, res) {
            return res.render('users/user-profile', {
                user: req.user
            });
        },
        getModifyProfileForm(res, req) {
            return res.render('users/modify-profile', {
                user: req.user
            });
        }
        // modifyProfile(req, res) {
        //     data.modifyUser(req.user, req.password, req.email, req.phoneNumber)
        //         .then(() => {
        //             return res.render('/modify-profile/:id');
        //         });
        // }
    };
};