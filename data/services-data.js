module.exports = function (models) {
    let {
        Drone
    } = models.Drone;

    return {
        getAllServices() {
            return new Promise((resolve, reject) => {
                Drone.distinct(
                    'serviceSupported',
                    (err, services) => {
                        if (err) {
                            return reject(err);
                        }
                        console.log(services);
                        return resolve(services);
                    });
            });
        }
    };
};