const fs = require('fs'),
    path = require('path');


module.exports = function(db) {
    let Drone = require('../models/drone-model');
    let Service = require('../models/service-model');
    let User = require('../models/user-model');
    let Order = require('../models/order-model')

    let models = { Drone, Service, User, Order };

    let data = {};

    fs.readdirSync(__dirname)
        .filter(file => file.includes('-data'))
        .forEach(file => {
            let modulePath = path.join(__dirname, file);
            let dataModule = require(modulePath)(models);
            Object.keys(dataModule)
                .forEach(key => {
                    data[key] = dataModule[key];
                });
        });
    return data;
};