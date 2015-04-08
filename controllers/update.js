///////////////////////////////
// CRUD Logic for adventures //
///////////////////////////////

var Adventure = require('../models/adventure.js');

var updateController = {

	renderAdventure: function(req, res) {

		Adventure.find({}, function(err, docs){

			res.render('update', {
				adventures: docs
			});
		})
		
	},

	addAdventure: function (req, res){
		var newAdventure = req.body;
		
		var adventure = new Adventure(newAdventure);

		adventure.save(function(err, savedAdventure){
			res.send(savedAdventure);
		});
	},

	deleteAdventure: function(req, res){
	  var deleting = req.body.targetId;
	  Adventure.findByIdAndRemove(deleting, function(err, docs){
	   	// console.log('Err:', err);
	    res.send('success');
	  });
	},

	getAdventure: function(req, res){
	  
	  var adventureId = req.params.adventure_id;
	  // Find the given ID in the database
	  Adventure.findById(adventureId, function(err, docs){
	    // console.log('Err:', err);
	   
	    res.send(docs);
	  });
	},

	editAdventure: function (req, res){
		console.log(req.params.adventure_id);
		var adventureId = req.params.adventure_id;
		
		Adventure.findByIdAndUpdate(adventureId, req.body, function(err, docs){
		  res.send(docs);
		});
	}
};

module.exports = updateController;