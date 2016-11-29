module.exports = function(Service) {
    return {
        getAllServices() {
            return new Promise((resolve, reject) => {
                Service.find((err, services) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(services);
                })
            })
        }
    }
}