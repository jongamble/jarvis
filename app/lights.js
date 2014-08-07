// app/routes.js
module.exports = function(app) { 
	// set routes
    app.get('/lights', function(req, res) {
      res.render('lights');
    });

}