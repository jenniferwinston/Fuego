var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	console.log("HITTING HOMEPAGE");
	res.sendFile('index.html');
});

router.get('/tables', function(req, res, next) {

});

module.exports = router;
