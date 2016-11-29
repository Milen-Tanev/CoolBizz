/* globals process module */
const express = require('express');

let app = express();
app.set('view-engine', 'pug');
app.use('/static', express.static('public'));

module.exports = {
    PORT: process.env.PORT || 3000,
    app
};