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

}