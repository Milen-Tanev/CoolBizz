const mongoose = require('mongoose');
let environment = process.env.NODE_ENV;
let connString = 'mongodb://localhost:27017/drones';

if (environment === 'production') {
    connString = `mongodb://${process.env.mongoDB}:${process.env.mongoDBpass}@ds111748.mlab.com:11748/drone-fleet';
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


        // test to see if DB is working
        // const droneSchema = mongoose.Schema({
        //     model: String
        // });
        // const modelName = 'FlyingWarior';

        // const Drone = mongoose.model(modelName, droneSchema);

        // const someDrone = new Drone({
        //     model: 'B52'
        // });
        // someDrone.save((err, entry, numAffected) => {
        //     console.log(entry);
        //     console.log(numAffected);
        // });

        return db;
    }
};