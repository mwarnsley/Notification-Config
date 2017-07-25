var mongoose = require('mongoose');

// Setting the schema for the accepted fields in the database
var notificationSchema = mongoose.Schema({
  orderNumber: String,
  type: Array,
  events: Array,
  email: String,
  text: String,
  api: Object
});

// Setting the Notifications model for the schema
var Notifications = mongoose.model('Notifications', notificationSchema);

module.exports = Notifications;
