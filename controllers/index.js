var Adventure = require('../models/adventure.js');

var indexController = {
	
	index: function(req, res) {
		Adventure.find({}, function(err, docs){
		// Adventure.find({coords : { $near : [req.params.lon, req.params.lat], function(err, docs){

			res.render('index', {
				adventures: docs
			});
		});
	},

	view: function(req, res) {

		if (!req.params.type) {
			Adventure.find({}, function(err, docs){
				res.render('view', {
					adventures: docs
				});
			});
		}
		else {
			Adventure.find({type: req.params.type, coords: {$near: {lat: 40, lng: -105}, $maxDistance : .23}}, function(err, docs){
				res.render('view', {
					adventures: docs
				});
			});
		}

	}

};

module.exports = indexController;