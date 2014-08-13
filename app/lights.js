// app/lights.js

var Lights	=	require('./models/lights')

module.exports = function(app, mongoose) { 
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

	app.post('/lights/lightSwitch/:id', function(req,res){
		Lights.find({id: req.params.id}, function(err, light){
			if (err) return next(err);
			light.status = !light.status;
			console.log(light);
			light.save(function(err){
				if (err) console.log(err);
			    res.redirect('/lights');
			});
		});
	});

}