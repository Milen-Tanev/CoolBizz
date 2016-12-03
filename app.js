/* globals console */

const config = require('./config');
let dbFactory = require('./db');
let dataService = require('./data/data-loader')(dbFactory.getDb());

const app = require('./config/app-config')(dataService);
require('./routers')(app, dataService);
var xsss;
app.listen(config.PORT, () => console.log(`
    The app is working on http://localhost:${config.PORT}
    Stable version available at ${herokuapp}`));

// console.log(app);