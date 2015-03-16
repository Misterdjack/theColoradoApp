var Adventure = require('../adventure.js');

adventure.find({}, function(err, result){
  if(result.length === 0){

    var berthoudPass = new adventure({
      name: Berthoud Pass,
      longitude: Number,
      latitude: Number,
      coords: [Number, Number],
      type: String,
      date: {
        type: Date,
        default: Date.now
      },
      imageUrl: String,
      description: String,
      rating: Number
    });
    berthoudPass.save();


  }
});