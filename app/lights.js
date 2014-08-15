// app/lights.js

var Lights	=	require('./models/lights')

module.exports = function(app, mongoose, gpio) { 
	// set routes
	app.get('/lights', function(req, res) {
		Lights.find().exec(function(err, items){
			res.render('lights', {
				items:items //get light data and pass to template
			});
		});
	});

	app.get('/lights/listLights', function(req, res){
		Lights.find().exec(function (err, items) {
			res.json(items);
		});
	});

	app.get('/lights/lightSwitch/:id', function(req,res){
		Lights.findOne({id: req.params.id}, function(err, light){
			if (err) return next(err);
			// Toggle LED
			int pinNum = light.pin;
			if(light.status == true){
				gpio.setup(pinNum, gpio.DIR_OUT, writeOff);
				function writeOff(){
					gpio.write(11, false, function(err){
						if(err) throw err;
						console.log('Pin Off');
					});
					setTimeout(function() {
						gpio.destroy(function() {
							console.log('Closed pins');
							return;
						});
					}, 800);
				}
			}else{
				gpio.setup(pinNum, gpio.DIR_OUT, writeOn);
				function writeOn(){
					gpio.write(11, true, function(err){
						if(err) throw err;
						console.log('Pin On');
					});
					setTimeout(function() {
						gpio.destroy(function() {
							console.log('Closed pins');
							return;
						});
					}, 800);
				}
			}

			// Write to DB
			light.status = !light.status;
			console.log(light);
			light.save(function(err){
				if (err) console.log(err);
				res.redirect('/lights');
			});
		});
	});

}