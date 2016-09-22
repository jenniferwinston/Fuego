var path = require('path');

module.exports = function(app) {
	app.get('/', function(req, res, next) {
		res.sendFile(path.join(__dirname, 'index.html'));
	});

	app.get('/view-tables', function(req, res, next) {
		res.sendFile(path.join(__dirname, 'view-tables.html'));
	});

	app.get('/make-reservation', function(req, res, next) {
		res.sendFile(path.join(__dirname, 'make-reservation.html'));
	});
};
