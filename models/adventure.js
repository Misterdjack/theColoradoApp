var mongoose = require('mongoose');

var adventureSchema = mongoose.Schema({
  type: String,
  name: String,
  longitude: Number,
  latitude: Number,
  coords: [Number, Number],
  date: {
    type: Date,
    default: Date.now
  },
  imageUrl: String,
  description: String,
  rating: Number
});

var Adventure = mongoose.model('Adventure', adventureSchema);

module.exports = Adventure;