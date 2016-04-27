var mongoose = require('mongoose');

var genreEvents = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  min: {
    type: Number,
    required: true
  },
  max: {
    type: Number,
    required: true
  },
  startlocation: {
    type: String,
    required: true
  },
  endlocation: {
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

module.exports.addEvents = function(event, callback){
  Events.create(event, callback);
}
