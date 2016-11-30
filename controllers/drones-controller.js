/* globals module */

module.exports = function(data) {
    return {
        listDrones(req, res) {
            return res.render('drones/drones-list', {
                user: req.user
            });
        }
    };
};