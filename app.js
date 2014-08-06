// set variables for environment
var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var flash = require('connect-flash');
var path = require('path');

app.configure(function(){

// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static('public'));

});

// set routes
    app.get('/', function(req, res) {
      res.render('index');
    });


require('./app/lights.js')(app);
// Set server port
app.listen(port);
console.log('server is running');