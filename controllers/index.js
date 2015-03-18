var Adventure = require('../models/adventure.js');

var indexController = {
	
	index: function(req, res) {
		Adventure.find({}, function(err, docs){
		// Adventure.find({coords : { $near : [req.params.lon, req.params.lat], function(err, docs){
			if (err) {
				console.log(err);
				res.send(500);
				return
			}
			res.render('index', {
				adventures: docs
			});
		});
	},

	view: function(req, res) {

		if (!req.params.type) {
			Adventure.find({}, function(err, docs){

				if (err) {
					console.log(err);
					res.send(500);
					return
				}
				res.render('view', {
					adventures: docs
				});
			});
		}
		
		else {
			Adventure.find({type: req.params.type}, function(err, docs){
			// Adventure.find({type: req.params.type, coords: {$near: {lat: 40, lng: -105}, $maxDistance : 1}}, function(err, docs){
			// If geolocation is allowed use
			// Adventure.find({type: req.params.type, coords: {$near: {lat: req.params.lat, lng: req.params.lng}, $maxDistance : 8046}}, function(err, docs){
				if (err) {
					console.log(err);
					res.send(500);
					return
				}
				res.render('view', {
					adventures: docs
				});
			});
		}

	}

};

module.exports = indexController;