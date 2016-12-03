module.exports = function(data) {
    return {
        getAllServices(req, res) {
            data.getAllServices().then(services => {
                res.render('drones/services.pug', {
                    services,
                    user: req.user
                });
            });
        },
        getDronesWithService(req, res) {
            let name = req.params.name;
            data.getAllDronesWithService(name).then(drones => {
                res.render('drones/drones-with-service.pug', {
                    service: drones[0].serviceSupported,
                    drones,
                    user: req.user
                });
            });
        }
    };
};