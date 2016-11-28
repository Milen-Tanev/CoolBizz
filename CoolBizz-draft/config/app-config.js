const express = require('express');

let app = express();
app.set('view-engine','pug');

module.exports = {
    PORT:3000,
    app:app
};