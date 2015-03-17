var Adventure = require('../models/adventure.js');

var mapController = {
	
	map: function(req, res) {

			res.render('map');
		
	},

	mapAdventures: function(req, res) {
		
				Adventure.find({type: req.params.type, coords: {$near: {lat: 40, lng: -105}, $maxDistance : .23}}, function(err, docs){
					
					var closeCoords = docs.map(function(doc){
						return doc.coords;
					});


					res.render('mapAdventures', {
						adventures: closeCoords
					});
				});
			
	}

};

module.exports = mapController;