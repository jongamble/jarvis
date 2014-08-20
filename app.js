// set variables for environment
var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);

var port = process.env.PORT || 4000;
var mongoose = require('mongoose');
var flash = require('connect-flash');
var path = require('path');
var gpio = require('rpi-gpio');


var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database


// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static('public'));

io.sockets.on('connection', function (socket) {
	socket.on('captain', function (data) {
		console.log(data);
		//sendMessage(data.message, socket);
		socket.emit('Hello');
	});
});


// Set server port
var io = require('socket.io').listen(app.listen(port));
// set routes
    app.get('/', function(req, res) {
      res.render('index');
    });


require('./app/lights.js')(app, mongoose, gpio);
require('./app/garage.js')(app);
require('./app/sensors.js')(app);
require('./app/settings.js')(app);


console.log('server is running');