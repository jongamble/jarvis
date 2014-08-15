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
			gpio.setup(11, gpio.DIR_OUT, write);
			gpio.destroy(function(){
				return;
			});
			if(light.status == true){
				function write(){
					gpio.write(11, false, function(err){
						if(err) throw err;
						console.log('Written to pin');
					});
					setTimeout(function() {
						gpio.destroy(function() {
							console.log('Closed pins');
							return;
						});
					}, 800);
				}
			}else{
				function write(){
					gpio.write(11, true, function(err){
						if(err) throw err;
						console.log('Written to pin');
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