var Adventure = require('../models/adventure.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	}
};

module.exports = indexController;