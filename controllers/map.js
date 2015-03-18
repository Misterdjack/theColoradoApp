var Adventure = require('../models/adventure.js');

var mapController = {
	
	map: function(req, res) {

			res.render('map');
		
	},

	mapAdventures: function(req, res) {
			// 
			// Go to heroku, get into shell of mongoLabs, grab-key,
			// then run command:  
			// db.adventure.ensureIndex({coords: "2dshpere"})
			// Adventure.find({type: req.params.type, coords: {$near: {lat: req.params.lat, lng: req.params.lng}, $maxDistance : 8046}}, function(err, docs){
			Adventure.find({}, function(err, docs){
			// Adventure.find({coords : { $near : [req.params.lon, req.params.lat], function(err, docs){

				res.render('mapAdventures', {
					adventures: docs
				});
			});
	}

};

module.exports = mapController;