var Sensors = 	require('./models/sensors');

// app/routes.js
module.exports = function(app, mongoose) { 
	// set routes
	app.get('/sensors', function(req, res) {
		Sensors.find().exec(function(err, items){
			res.render('sensors', {
				items:items //get light data and pass to template
			});
		});
	});

	app.get('/sensors/listSensors', function(req, res){
		Sensors.find().exec(function (err, items) {
			res.json(items);
		});
	});

}