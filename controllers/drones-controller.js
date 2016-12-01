/* globals module */

module.exports = function (data) {
    return {
        listDrones(req, res) {
            data.getAllDrones().then(drones => {
                res.render('drones/drones-list', {
                    drones: drones
                });
            });
        },
        getDroneDetails(req, res) {
            let id = req.params.id;
            data.getDrone(id)
                .then(drone => {
                    res.render('drones/drones-profile', {
                        drone:drone
                    });
                });
        }
    }
}