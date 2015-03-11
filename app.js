var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var mapController = require('./controllers/map.js');

// Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/colorado-app');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

// Api route
app.get('/api/map', mapController.map);

var server = app.listen(7194, function() {
	console.log('Express server listening on port ' + server.address().port);
});
