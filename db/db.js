/* globals process */

const mongoose = require('mongoose');
let environment = process.env.NODE_ENV;
let connString = 'mongodb://localhost:27017/drones';

if (environment === 'production') {
    connString = `mongodb://${process.env.mongoDB}:${process.env.mongoDBpass}@ds111748.mlab.com:11748/drone-fleet`;
}
module.exports = {
    getDb() {

        mongoose.connect(connString);

        const db = mongoose.connection;

        db.on('error', (err) => {
            console.log(`
    Connection failed!\n# { err }
    `);
        });

        db.on('open', () => {
            console.log('Db connection successfully established!');
        });


        let sampleInitialData = require('./initialData');


        return db;
    }
};