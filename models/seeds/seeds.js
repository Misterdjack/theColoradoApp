var Adventure = require('../adventure.js');

adventure.find({}, function(err, result){
  if(result.length === 0){

    var berthoudPass = new adventure({
      name: 'Berthoud Pass',
      latlng: 39.798132, -105.776943,
      type: schralpinZeGnar,
      date: 2015-01-10,
      imageUrl: 'http://www.glutenfreesnowboarder.com/wp-content/uploads/2010/01/IMG_0590.jpg',
      description: 'fun place to skin/snowshoe/hike and avoid the crowds',
      rating: 3
    });
    berthoudPass.save();


  }
});