module.exports = function(Drone) {
    return {
        getAllDrones() {
            return new Promise((resolve, reject) => {
                Drone.find((err, drones) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(drones);
                })
            })
        },
        getDrone(id) {
            return new Promise((resolve,reject) => {
                Drone.findOne({_id:id},(err,drone) => {
                    if(err) {
                        return reject(err);
                    }

                    return resolve(drone);
                })
            })
        },
        getAllDronesWithService(service) {
            return new Promise((resolve,reject) => {
                Drone.find({})
            })
        }
    }
}