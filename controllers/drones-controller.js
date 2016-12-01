/* globals module */

module.exports = function (data) {
    return {
        listDrones(req, res) {
            data.getAllDrones().then(drones => {
                res.render('drones/drones-list', {
                    drones: drones
                });
            });
        }
    }
}