var path = require('path');

module.exports = function(app) {
	app.get('/reservations', function(req, res, next) {
		res.end("GET RESERVATIONS ROUTE");
	});

	app.post('/reservations', function(req, res, next) {
		console.log("RESERVATIONS POST ROUTE");
	});
};
