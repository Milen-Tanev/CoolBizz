const config = require('./config');
let dbFactory = require('./db');
let dataService = require('./data')(dbFactory.getDb());

const app = require('./config/app-config');
require('./routers')(app, dataService);
app.listen(config.PORT, () => console.log(`The app is working on ${config.PORT}`));