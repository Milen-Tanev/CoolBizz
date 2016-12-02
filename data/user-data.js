module.exports = function(models) {
    let {
        User
    } = models.User;

    return {
        createUser({username, password, firstName,lastName, email, phoneNumber}) {
            let user = new User( username, password, firstName, lastName, email, phoneNumber );
            return new Promise((resolve, reject) => {
                user.save(err => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(user);
                });
            });
        },
        findByUsernameAndPassword(username, password){
            return new Promise((resolve, reject) => {
                User.findOne({ username, password }, (err, user) => {
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