var Adventure = require('../models/adventure.js');

var updateController = {
	addAdventure: function (req, res){
		var newAdventure = req.body;

		var adventure = new Adventure(newAdventure);

		adventure.save(function(err, savedAdventure){
			res.send(savedAdventure);
		});
	},

	deleteAdventure: function(req, res){
	  var deleting = req.body.targetId;
	  Adventure.findByIdAndRemove(deleting, function(err, result){
	   	// console.log('Err:', err);
	    res.send('success');
	  });
	},

	getAdventures: function(req, res){
	  
	  var adventureId = req.params.adventure_id;
	  // Find the given ID in the database
	  Adventure.findById(adventureId, function(err, result){
	    // console.log('Err:', err);
	   
	    res.send(result);
	  });
	},

	editAdventure: function (req, res){
		var adventureId = req.params.adventure_id;
		
		Adventure.findByIdAndUpdate(adventureId, req.body, function(err, result){
		  res.send(result);
		});
	}
};

module.exports = updateController: