// app/models/lights.js
// load required modules

var mongoose = require('mongoose');

// define the schema for the lights model
var lightSchema = mongoose.Schema({
	id: mongoose.Schema.Types.Mixed,
	name: mongoose.Schema.Types.Mixed,
	pin: mongoose.Schema.Types.Mixed,
	status: { type: Boolean, default: false}
});

// create the model for lights and expose it to the app
module.exports = mongoose.model('Lights', lightSchema);
