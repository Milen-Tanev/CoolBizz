/* globals module */

module.exports = function(data) {
    return {
        search(req, res) {
            let pattern = req.query.pattern;

            data.getAllDrones().then(drones => {
                let dronesFiltered = drones.filter(dr => dr.name === pattern)

                if (dronesFiltered.length === 0) {
                    dronesFiltered = null;
                }

                res.render('home/search', {
                    dronesFiltered,
                    user: req.user
                });
            });
        }
    };
};