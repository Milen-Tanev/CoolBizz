/* globals module */

module.exports = function(data) {
    return {
        name: 'authentication',
        register(req, res) {
            let { username, password, firstName, lastName, email, phoneNumber } = req.body;
            //console.log(req.body);
            //console.log(data);
            data.createUser({username, password, firstName,lastName, email, phoneNumber})
                .then(user => {
                    console.log(user);
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
        }
    };
};