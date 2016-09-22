var path = require('path');

module.exports = function(app) {
	router.get('/', function(req, res, next) {
		res.sendFile(path.join(__dirname, 'index.html'));
	});

	router.get('/view-tables', function(req, res, next) {
		res.sendFile(path.join(__dirname, 'view-tables.html'));
	});

	router.get('/make-reservation', function(req, res, next) {
		res.sendFile(path.join(__dirname, 'make-reservation.html'));
	});
};
