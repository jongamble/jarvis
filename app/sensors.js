// app/routes.js
module.exports = function(app) { 
	// set routes
    app.get('/sensors', function(req, res) {
      res.render('sensors');
    });

}