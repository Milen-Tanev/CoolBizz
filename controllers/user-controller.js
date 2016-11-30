/* globals module */

module.exports = function(data) {
    return {
        signUp(req, res) {
            return res.render('home/home', {
                user: req.user
            });
        },
        register(req, res) {
            return res.render('home/home', {
                user: req.user
            });
        }
    };
};