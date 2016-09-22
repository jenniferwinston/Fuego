// file oath dependencies
var path = require('path');

module.exports = function(app) {
	//HTML get requests
	app.get('/tables', function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/view-tables.html'));
	});

	app.get('/reserve', function(req, res, next) {
		res.sendFile(path.join(__dirname, '/../public/make-reservation.html'));
	});

	app.use( function(req, res, next) {
		res.sendFile(path.join(__dirname, '/../public/index.html'));
	});
};
