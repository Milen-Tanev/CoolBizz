module.exports = function(models) {
    let {
        User
    } = models;

    return {
        createUser(username, password) {
            let user = new User({ username, password });
            return new Promise((resolve, reject) => {
                user.save(err => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(user);
                });
            });
        },
        getAllUsers() {
            return new Promise((resolve, reject) => {
                User.find()
                    .exec((err, powers) => {
                        if (err) {
                            return reject(err);
                        }
                        return resolve(powers);
                    });
            });
        }

    };
};