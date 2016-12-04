const fs = require('fs');
const df = require('dateformat');

module.exports = function (err) {
    let currentTime = new Date();
    let formattedDate = df(currentTime, 'dd-mm-yyyy-hh-MM-ss-ms');
    fs.writeFile(`./errors/error${formattedDate}.txt`, err, 'utf-8');
};