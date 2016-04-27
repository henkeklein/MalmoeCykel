var mongoose = require('mongoose');

var genreEvents = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

var Events = module.exports = mongoose.model('events', genreEvents);

module.exports.getEvents = function(callback, limit){
  Events.find(callback).limit(limit);
}
