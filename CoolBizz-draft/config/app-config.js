const express = require('express');

let app = express();
app.set('view-engine','pug');
app.use("/static", express.static("public"));

module.exports = {
    PORT:3000,
    app:app
};