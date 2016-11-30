/* globals module */

module.exports = function(data) {
    return {
        listDrones(req, res) {
                return res.render('home/home', {
                user: req.user
            });
        }
    };
};