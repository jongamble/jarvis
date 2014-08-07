// app/routes.js
module.exports = function(app) { 
	// set routes
    app.get('/garage', function(req, res) {
      res.render('garage');
    });

}