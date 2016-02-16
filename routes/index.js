var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET topic page. */
router.get('/topics', function(req, res, next) {
  res.render('topics', { title: 'topics' });
});
/* GET template page. */
router.get('/template', function(req, res, next) {
  res.render('template', { title: 'template' });
});
/* GET email page. */
router.get('/email', function(req, res, next) {
  res.render('email', { title: 'email' });
});

module.exports = router;
