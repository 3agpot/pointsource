var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Point Source' });
});

router.get('/people', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.json({"person":{"address":{"houseNumber":"3088","streetName":"Millbrook Road","city":"Raleigh","state":"North Carolina","zip":"27603","apartmentNumber":null},"gender":"male","firstName":"James","familyName":"Ingram","imageURL":"/assets/img/male2.png"}});
});

module.exports = router;
