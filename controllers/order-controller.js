const constants = require('../config/constants'),
    errorLogger = require('../config/error-logger');

module.exports = function(data) {
    return {
        getCreateOrderForm(req, res) {
            data.getAllServices()
                .then(services => {
                    res.status(200)
                        .render('orders/create-order', {
                            services,
                            user: req.user
                        });
                })
                .catch(err => {
                    res.status(500)
                        .send(err);
                });
        },
        createOrder(req, res) {
            let { orderType, startDate, endDate } = req.body;
            let userId = req.session.passport.user;

            data.createOrder(orderType, startDate, endDate, userId)
                .then(() => {
                    return res.status(200)
                        .redirect('/');
                })
                .catch(err => {
                    errorLogger(err);
                    res.status(constants.invalidInputServerResponse).send('Please enter valid data');
                });
        }
    }
};