module.exports = function(models) {
    let {
        Service
    } = models;

    return {
        getAllServices() {
            return new Promise((resolve, reject) => {
                Service.find((err, services) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(services);
                });
            });
        }
    };
};