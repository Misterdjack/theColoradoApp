var Adventure = require('../models/adventure.js');

var mapController = {
	map: function(req, res) {
		res.render('map');
	}
};

module.exports = mapController;