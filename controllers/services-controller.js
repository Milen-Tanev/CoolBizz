module.exports = function(data) {
    return {
      createService(req, res) {
            let { name } = req.body;
            let {role} = req.body;

            if(role === 'admin'){
                data.createService(name)
                    .then(() => {
                        return res.redirect('/services');
                 });
            }
            else{
                return res.status(404).send("You are not autorized for creating new services");
            }
            console.log(res);

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