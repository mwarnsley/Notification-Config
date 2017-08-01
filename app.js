var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// APIS
var mongoose = require('mongoose');
// Production database (Need to comment depending on what environment is being edited)
// mongoose.connect('mongodb://admin:password1234@ds125623.mlab.com:25623/notifications');
// Local Development Database (Need to comment depending on what environment is being edited)
mongoose.connect('mongodb://localhost:27018/notificationconfig');

var Notifications = require('./models/notifications.js');

// --->>> POST NOTIFICATIONS <<<---
app.post('/notifications', (req, res) => {
  var notification = req.body;

  Notifications.create(notification, (err, notifications) => {
    if (err) {
      throw err;
    }
    res.json(notifications);
  });
});
// --->>> GET NOTIFICATIONS <<<---
app.get('/notifications', (req, res) => {
  Notifications.find((err, notifications) => {
    if (err) {
      throw err;
    }
    res.json(notifications);
  });
});
// --->>> DELETE NOTIFICATIONS <<<---
app.delete('/notifications/:_id', (req, res) => {
  var query = {
    _id: req.params._id
  };
  Notifications.remove(query, (err, notifications) => {
    if (err) {
      throw err;
    }
    res.json(notifications);
  });
});
//--->>> UPDATE NOTIFICATIONS <<<--
app.put('/notifications/:_id', (req, res) => {
  var notification = req.body;
  var query = {
    _id: req.params._id
  };

  // If field doesn't exist we will set a new field
  var update = {
    '$set': {
      active: notification.active,
      orderNumber: notification.orderNumber,
      type: notification.type,
      events: notification.events,
      email: notification.email,
      text: notification.text,
      api: {
        url: notification.api.url,
        header: notification.api.headerType,
        body: notification.api.body
      }
    }
  };

  // When true returs the updated document
  var options = {new: true};

  Notifications.findOneAndUpdate(query, update, options, (err, notifications) => {
    if (err) {
      throw err;
    }
    res.json(notifications);
  });
});
// END APIS

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
