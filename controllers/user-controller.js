/* globals module */

module.exports = function(data) {
    return {
        signIn(req, res) {
            return res.render('users/sign-in', {
                user: req.user
            });
        },
        signOut(req, res){

        },
        register(req, res) {
            return res.render('users/registration', {
                user: req.user
            });
        }
    };
};