const errorLogger = require('../config/error-logger');

module.exports = function(models) {

    let {
        Order
    } = models.Order;

    return {
        createOrder( orderType, startDate, endDate, userId ) {

            let order = new Order({ orderType, startDate, endDate, userId });

            return new Promise((resolve, reject) => {
                order.save(err => {
                    if (err) {
                        errorLogger(err);
                        return reject(err);
                    }
                    return resolve(order);
                });
            });
        },
        getAllOrders(userId) {
            return new Promise((resolve, reject) => {
                Order.find({
                    userId: userId
                }, (err, orders) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(orders);
                });
            });
        }
    };
};