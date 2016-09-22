var path = require('path');

module.exports = function(app) {
	router.get('/reservations', function(req, res, next) {
		res.end("GET RESERVATIONS ROUTE");
	});

	router.post('/reservations', function(req, res, next) {
		console.log("RESERVATIONS POST ROUTE");
	});
};
