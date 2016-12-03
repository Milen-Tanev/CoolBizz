/* globals module require __dirname*/
const fs = require('fs'),
    path = require('path');

module.exports = function(passport, data) {
    fs.readdirSync(__dirname)
        .filter(file => file.includes('-strategy'))
        .forEach(file => {
            const modulePath = path.join(__dirname, file);
            require(modulePath)( passport, data);
        });
};