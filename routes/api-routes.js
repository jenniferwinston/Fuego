var express = require('express');
var router = express.Router();

router.get('/reservations', function(req, res, next) {
  res.end("GET RESERVATIONS ROUTE");
});

router.post('/reservations', function(req, res, next) {

});

module.exports = router;
