var express = require('express');
var router = express.Router();

var pg = require('pg');
//localhost
var connectionString = 'postgres://emailMyRep:emailMyRep@localhost:5433/emailMyRep';
//remote
//var connectionString = 'idk yet'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Email My Rep' });
});
/* GET topic page. */
router.get('/topics', function(req, res, next) {
  pg.connect(connectionString, function(err, client, done) {
    client.query("SELECT * FROM \"Topics\";", function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('topics', {results: result.rows} ); }

    });
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

/* GET email page. */
router.get('/db', function(req, res, next) {
  res.render('test', { title: 'testx' });
});
module.exports = router;
