//////////////////////////
// Model for adventures //
//////////////////////////

var mongoose = require('mongoose');

var adventureSchema = mongoose.Schema({
  type: String,
  name: String,
  date: {
    type: Date,
    default: Date.now
  },
  imageUrl: String,
  description: String,
  rating: Number,
  coords: {lat: Number, lng: Number}
});

var Adventure = mongoose.model('Adventure', adventureSchema);

module.exports = Adventure;