/* globals module */

module.exports = function(data) {
    return {
        getCreateDroneForm(req, res) {
            res.status(200)
                .render('drones/create-drone', {
                    user: req.user
                });
        },
        listDrones(req, res) {
            data.getAllDrones()
                .then(drones => {
                    res.status(200)
                        .render('drones/drones-list', {
                            drones,
                            user: req.user
                        });
                })
                .catch(err => {
                    res.status(500)
                        .send(err);
                });
        },
        getDroneDetails(req, res) {
            let id = req.params.id;
            data.getDrone(id)
                .then(drone => {
                    res.status(200)
                        .render('drones/drones-profile', {
                            drone,
                            user: req.user
                        });
                })
                .catch(err => {
                    res.status(500)
                        .send(err);
                });
        },
        getServices(req, res) {
            res.status(200).render('drones/services', {
                drone,
                user: req.user
            });
        }
    };
};