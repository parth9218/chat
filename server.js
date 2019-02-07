var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var db = require('./config/db');
var router = require('./routes/app_route');


mongoose.connect(db.url, { useNewUrlParser: true } ,(err) => {
    if(err) {
        console.error(err);
        process.exit(1);
    }
    app.use(morgan('dev'));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/', router);

    var server = app.listen(3000, () => {
        console.log('server is running on port', server.address().port);
    });
});


