// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(path.join(__dirname, 'public')));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
