// app/routes.js
module.exports = function(app) { 
	// set routes
    app.get('/settings', function(req, res) {
      res.render('settings');
    });

}