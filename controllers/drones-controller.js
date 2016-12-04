/* globals module */

module.exports = function(data) {
    return {
       getCreateDroneForm(req, res) {
            res.render('drones/create-drone', {
                user: req.user
            });
        },
        listDrones(req, res) {
            data.getAllDrones().then(drones => {
                res.render('drones/drones-list', {
                    drones: drones,
                    user: req.user
                });
            });
        },
        getDroneDetails(req, res) {
            let id = req.params.id;
            data.getDrone(id)
                .then(drone => {
                    res.render('drones/drones-profile', {
                        drone: drone,
                        user: req.user
                    });
                });
        },
        // Not good
        getServices(req, res) {
            res.render('drones/services', {
                drone,
                user: req.user
            });
        }
    };
};