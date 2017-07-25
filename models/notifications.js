var mongoose = require('mongoose');

var notificationSchema = mongoose.Schema({
  type: Array,
  events: Array,
  email: String,
  text: String
});

var Notifications = mongoose.model('Notifications', notificationSchema);

module.exports = Notifications;
