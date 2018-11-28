var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homePage', { title: 'Express' });
});

/* GET case page. */
router.get('/case', function(req, res, next) {
    res.render('case', { title: 'Express' });
});

/* GET caseDetail page. */
router.get('/caseDetail', function(req, res, next) {
    res.render('caseDetail', { title: 'Express' });
});

/* GET joinUs page. */
router.get('/joinUs', function(req, res, next) {
    res.render('joinUs', { title: 'Express' });
});

/* GET newCustomers page. */
router.get('/newCustomers', function(req, res, next) {
    res.render('newCustomers', { title: 'Express' });
});

/* GET we page. */
router.get('/we', function(req, res, next) {
    res.render('we', { title: 'Express' });
});

module.exports = router;
