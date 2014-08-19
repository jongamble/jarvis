// set variables for environment
var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var mongoose = require('mongoose');
var flash = require('connect-flash');
var path = require('path');
var gpio = require('rpi-gpio');

// Hook Socket.io into Express
var io = require('socket.io').listen(app);	

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database


// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static('public'));

// set routes
    app.get('/', function(req, res) {
      res.render('index');
    });


require('./app/lights.js')(app, mongoose, gpio);
require('./app/garage.js')(app);
require('./app/sensors.js')(app);
require('./app/settings.js')(app);


io.sockets.on('connection', socket);


// Set server port
app.listen(port);
console.log('server is running');