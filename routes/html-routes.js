var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.end("HOME PAGE");
});

router.get('/tables', function(req, res, next) {

});

module.exports = router;
