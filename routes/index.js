var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Entering to Index');
  next();
});

router.get('/', function (request, response) {
  response.render('pages/index');
});

module.exports = router;
