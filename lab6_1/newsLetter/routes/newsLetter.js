var express = require('express');
var router = express.Router();
const fs = require('fs');
var validator = require('express-validator');

/* GET newsletter page. */
router.get('/', function(req, res, next) {
  res.render('newsLetter', { title: 'News Letter' });
});

router.post('/', function(req, res, next) {
    //console.log(req.body.email);
    //res.render('newsLetter', { title: 'News Letter' });
    fs.appendFile('./subscribers.txt', req.body.email + "\n", (err) => {
        if (err) throw err;
    });
    res.render('thankyou',{mailAddress: req.body.email});
  });

module.exports = router;
