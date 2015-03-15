var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var mapController = require('./controllers/map.js');
var updateController = require('./controllers/update.js');

// Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/colorado-app');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// Index route
app.get('/', indexController.index);

// Update routes
app.get('/update', updateController.renderAdventure);
app.post('/update/addAdventure', updateController.addAdventure);
app.post('/update/deleteAdventure', updateController.deleteAdventure);
app.get('/update/getAdventure/:adventure_id', updateController.getAdventure);
app.post('/update/editAdventure/:adventure_id', updateController.editAdventure);

// Map route
app.get('/map', mapController.map);

var server = app.listen(7194, function() {
	console.log('Express server listening on port ' + server.address().port);
});
