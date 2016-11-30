/* globals module */

module.exports = function(data) {
    return {
        search(req, res) {
            return res.render('home/home', {
                user: req.user
            });
        }
    };
};