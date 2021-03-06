// set variables for environment
var express = require('express');
var app = express();
var port = process.env.PORT || 80;
var mongoose = require('mongoose');
var flash = require('connect-flash');
var path = require('path');
var gpio = require('rpi-gpio');

var bodyParser = require('body-parser')


var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database


// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use( bodyParser.json() );
app.use(express.static('public'));

// set routes
    app.get('/', function(req, res) {
      res.render('index');
    });


require('./app/lights.js')(app, mongoose, gpio);
require('./app/garage.js')(app);
require('./app/sensors.js')(app, mongoose);
require('./app/settings.js')(app, mongoose);

app.listen(port);
console.log('server is running');