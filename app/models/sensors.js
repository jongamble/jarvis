// app/models/sensors.js
// load required modules

var mongoose = require('mongoose');

// define the schema for the sensors model
var sensorSchema = mongoose.Schema({
	id: mongoose.Schema.Types.Mixed,
	name: mongoose.Schema.Types.Mixed,
	pin: mongoose.Schema.Types.Mixed,
	status: mongoose.Schema.Types.Mixed
});

// create the model for sensors and expose it to the app
module.exports = mongoose.model('Sensors', sensorSchema);
