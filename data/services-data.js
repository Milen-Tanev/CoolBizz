module.exports = function(models) {
    let {
        Drone
    } = models.Drone;

    let {
        Service
    } = models.Service;


    return {
        createService(name) {

            let service = new Service({name});

            return new Promise((resolve, reject) => {
                service.save(err => {
                    if (err) {
                        console.log(err);
                        return reject(err);
                    }
                    //console.log(user);
                    return resolve(service);
                });
            });
        },
        getAllServices() {
            return new Promise((resolve, reject) => {
                Drone.distinct(
                    'serviceSupported',
                    (err, services) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(services);
                    });
            });
        },
        getAllDronesWithService(name) {
            return new Promise((resolve, reject) => {
                Drone.find({ serviceSupported: name }, (err, drones) => {
                    if (err) {
                        return reject(err);
                    }
                    // console.log(drones);
                    return resolve(drones);
                });
            });
        }
    };
};