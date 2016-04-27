var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

var Events = module.exports = mongoose.model('Events', eventSchema);

module.exports.getEvents = function(callback, limit){
  Events.find(callback).limit(limit);
}
