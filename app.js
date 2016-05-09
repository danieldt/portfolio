var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/demo_partials'));
app.use(express.static(__dirname + '/angular_app'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.locals.title = 'My brand new Portfolio';

app.get('/', function(request, response) {
    response.render('pages/index');
});

app.get('/angular_example', function(request, response) {
    response.render('pages/angular_example');
});

app.get('/customer_app', function(request, response) {
    response.render('pages/customer_management');
});

app.listen(app.get('port'), function () {
    console.log('App listening on port !', app.get('port'));
});
