const config = require('./config');
let dbFactory = require('./db');
let dataService = require('./data')(dbFactory.getDb());

let app = config.app;
// require('./routers')(app, dataService);
app.listen(config.PORT, () => console.log(`The app is working on ${config.PORT}`));