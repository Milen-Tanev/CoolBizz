const constants = require('../config/constants'),
    errorLogger = require('../config/error-logger');

module.exports = function (data) {
    return {
        getCreateOrderForm(req, res) {
            data.getAllServices().then(services => {
                res.render('orders/create-order', {
                    services,
                    user: req.user
                });
            });
        },
        createOrder(req, res) {
            let { orderType, startDate, endDate } = req.body;
            let userId = req.session.passport.user;

            data.createOrder(orderType, startDate, endDate, userId  )
                .then(() => {
                    return res.redirect('/');
                })
                .catch(err => {
                    errorLogger(err);
                    res.status(constants.invalidInputServerResponse).send('Please enter valid data');
                });
        }
    }
};