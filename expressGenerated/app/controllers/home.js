const express = require('express'),
    mongoose = require('mongoose');
const router = express.Router(),
    Article = mongoose.model('Article');

module.exports = function (app) {
    app.use('/', router);
};

router.get('/', (req, res, next) => {
    Article.find((err, articles) => {
        if (err) {
            return next(err);
        }
        res.render('index', {
            title: 'Generator-Express MVC',
            articles
        });
    });
});
