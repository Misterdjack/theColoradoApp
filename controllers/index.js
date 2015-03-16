var Adventure = require('../models/adventure.js');

var indexController = {
	
	index: function(req, res) {
		Adventure.find({}, function(err, docs){

			res.render('index', {
				adventures: docs
			});
		})
	}
};

module.exports = indexController;