// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var api_routes = require('./routes/api-routes.js');
var html_routes = require('./routes/html-routes.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', api_routes);
app.use('/', html_routes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
