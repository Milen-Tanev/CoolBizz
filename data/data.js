module.exports = function(db) {
    return {

        /* Drones */
        /* Servicess */
        /* Users */
        createUser(username, password) {
            let user = {
                username,
                password,
                usernameToLower: username.toLowerCase()
            };

            db.get('users').insert(user)
                .value();

            db.write();

            return user;
        },
        getAllUsers() {
            return db.get('users')
                .value();
        },

        getUserByUsername(username) {
            let user = db.get('users')
                .find({
                    usernameToLower: username.toLowerCase()
                })
                .value();
            return user || null;
        }

    };
};