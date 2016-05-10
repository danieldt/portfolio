var express = require('express');
var favicon = require('serve-favicon');
var _ = require('underscore');
var app = express();

var index = require('./routes/index');
var demo = require('./routes/demo');

// app.use(favicon(__dirname + '/assets/images/favicon.ico'));

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/demo_partials'));
app.use(express.static(__dirname + '/angular_apps'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.locals.title = 'My brand new Portfolio';

app.use('/', index);
app.use('/', demo);

app.listen(app.get('port'), function () {
  console.log('App listening on port', app.get('port'));
});
