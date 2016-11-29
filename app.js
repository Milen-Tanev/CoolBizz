const config = require('./config/app-config');
let app = config.app;

app.listen(config.PORT, () => console.log(`The app is working on ${config.PORT}`));