// app/routes.js

var Lights	=	require('./models/lights');

module.exports = function(app, mongoose) { 
	// set routes
    app.get('/settings', function(req, res) {
      res.render('settings');
    });


    app.post('/settings/createLight', function(req, res){
    	var light = new Lights(req.body);

    	light.save(function(err, light){
    		if (err) return console.error(err);
    		console.log(light);
    	});
    	res.json(light);
    });
}