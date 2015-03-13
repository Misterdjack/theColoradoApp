var Adventure = require('../models/adventure.js');

var indexController = {
	index: function(req, res) {

		Adventure.find({}, function(err, result){

			res.render('index', {
				adventures: result
			});
		})
		
	}
};

module.exports = indexController;