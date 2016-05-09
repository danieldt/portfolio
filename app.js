var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('My brand new Portfolio!');
});

app.listen(app.get('port'), function () {
  console.log('App listening on port !', app.get('port'));
});
