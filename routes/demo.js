var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Entering to Demo');
  next();
});

router.get('/angular_example', function (request, response) {
  response.render('pages/angular_example');
});

router.get('/customer_app', function (request, response) {
  response.render('pages/customer_management');
});

module.exports = router;
