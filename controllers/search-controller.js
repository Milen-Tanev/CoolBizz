/* globals module */
const constants = require('../config/constants');

module.exports = function(data) {
    return {
        search(req, res) {
            let pattern = req.query.pattern;

            data.getAllDrones()
                .then(drones => {
                    let dronesFiltered = drones.filter(dr => dr.name === pattern);

                    if (dronesFiltered.length === constants.zero) {
                        dronesFiltered = null;
                    }

                    res.status(200).render('home/search', {
                        dronesFiltered,
                        user: req.user
                    });
                })
                .catch(err => {
                    res.status(500)
                        .send(err);
                });
        }
    };
};