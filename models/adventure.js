var mongoose = require('mongoose');

var adventureSchema = mongoose.Schema({
  name: String,
  latlng: Number,
  type: String,
  date: {
    type: Date,
    default: new Date()
  },
  imageUrl: String,
  description: String,
  rating: Number
});

var Adventure = mongoose.model('Adventure', adventureSchema);

module.exports = Adventure;