// app/routes.js

var Lights	=	require('./models/lights');
var Sensors = 	require('./models/sensors');
// Speed up calls to hasOwnProperty
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

module.exports = function(app, mongoose) { 
	// set routes
    app.get('/settings', function(req, res) {
      res.render('settings');
    });



// Settings for Lights
    app.post('/settings/createLight', function(req, res){
    	//console.log(req.body);
    	Lights.find({id: req.body.id}, function(err, light){
    		if(isEmpty(light)){
		    	var light = new Lights(req.body);

		    	light.save(function(err, light){
		    		if (err) return console.error(err);
		    		console.log(light);
		    	});
		    	res.json(light);
		    }
		    else{
		    	res.json(false);
		    }
    	});
	    
    });
    app.get('/settings/editLight/:id', function(req, res) {
    	Lights.findOne({id: req.params.id}, function(err, light){
			res.render('settings-editLight', {
				light:light //get light data and pass to template
			});
		});
    });
    app.post('/settings/editLight/:id', function(req, res) {
    	Lights.findOne({id: req.params.id}, function(err, light){
			light.id = req.body.id;
			light.name = req.body.name;
			light.pin = req.body.pin;
			light.status = req.body.status;
			
			light.save(function(err,light){
				if (err) return console.error(err);
				console.log(light);
			});
			res.redirect('/settings');
		});
    });
    app.delete('/settings/deleteLight/:id',function(req, res) {
		Lights.remove({id: req.params.id}, function(err, result) {
			Lights.find().exec(function (err, items) {
				res.json((result === 1) ? items : { msg:'error: ' + err });
		   	});
		});
	});




// Settings for Sensors
	app.post('/settings/createSensor', function(req, res){
    	Sensors.find({id: req.body.id}, function(err, sensor){
    		if(isEmpty(sensor)){
		    	var sensor = new Sensors(req.body);

		    	sensor.save(function(err, sensor){
		    		if (err) return console.error(err);
		    		console.log(sensor);
		    	});
		    	res.json(sensor);
		    }
		    else{
		    	res.json(false);
		    }
    	});
	    
    });


    app.get('/settings/editSensor/:id', function(req, res) {
    	Sensors.findOne({id: req.params.id}, function(err, sensor){
			res.render('settings-editSensor', {
				sensor:sensor //get sensor data and pass to template
			});
		});
    });
    app.post('/settings/editSensor/:id', function(req, res) {
    	Sensors.findOne({id: req.params.id}, function(err, sensor){
			light.id = req.body.id;
			light.name = req.body.name;
			light.pin = req.body.pin;
			light.status = req.body.status;
			
			light.save(function(err,light){
				if (err) return console.error(err);
				console.log(light);
			});
			res.redirect('/settings');
		});
    });
    app.delete('/settings/deleteSensor/:id',function(req, res) {
		Sensors.remove({id: req.params.id}, function(err, result) {
			Sensors.find().exec(function (err, items) {
				res.json((result === 1) ? items : { msg:'error: ' + err });
		   	});
		});
	});
}