var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.sendFile('index.html');
});

router.get('/view-tables', function(req, res, next) {
	res.sendFile('view-tables.html');
});

router.get('/make-reservation', function(req, res, next) {
	res.sendFile('make-reservation.html');
});

module.exports = router;
