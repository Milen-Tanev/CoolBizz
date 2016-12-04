const constants = require('../config/constants');

module.exports = function (data) {
    return {
        createService(req, res) {
            let { name } = req.body;
            let userId = req.session.passport.user;

            data.findUserById(userId)
                .then(user => {
                    let role = user.role;
                    let isDeleted = user.isDeleted;

                    if (role === 'admin' && isDeleted.toString() === 'false') {
                        data.createService(name)
                            .then(() => {
                                return res.redirect('/services');
                            });
                    } else {
                        return res.status(constants.notAuthorizedServerResponse).send('You are not autorized for creating new services');
                    }
                });
        },
        getAllServices(req, res) {
            data.getAllServices().then(services => {
                res.render('drones/services.pug', {
                    services,
                    user: req.user
                });
            });
        },
        getCreateServiceForm(req, res) {
            res.render('drones/create-service', {
                user: req.user
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