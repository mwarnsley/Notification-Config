"use strict";

var express = require('express');
var app = express();
var path = require('path');
var port = 5000;

// Set the port to use
app.set('port', (process.env.PORT || port));

// Middleware to define folder for static files
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(app.get('port'), () => {
  console.log(`Application listening on port: `, app.get('port'));
});
