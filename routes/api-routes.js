

var tableData = require('../data/table-data.js');
var waitList = require('../data/waitinglist-data.js');


module.exports = function(app) {

	// API get requests
	app.get('/api/tables', function(req, res) {
		res.json(tableData);
	});

	app.get('/api/waitlist', function(req, res) {
		res.json(waitList);
	});

	// API post requests

	app.post('/apt/tables', function (req, res) {
		if (tableData.length < 5) {
			tableData.push(req.body);
			res.json(true);
		} else {
			waitList.push(req.body);
			res.json(false);
		}
	});

	// clear the table when full
	app.post('/api/clear', function(){
		tableData = [];
		waitlist = [];
	});

};
