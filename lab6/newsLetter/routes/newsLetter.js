var express = require('express');
var router = express.Router();
const fs = require('fs');


/* GET newsletter page. */
router.get('/', function(req, res, next) {
  res.render('newsLetter', { title: 'News Letter' });
});

router.post('/', function(req, res, next) {
    req.assert('email', 'A valid email is required').notEmpty().isEmail();

    const errors = req.validationErrors();

    if(errors) res.render('error', {errors});
    
    fs.appendFile('./subscribers.txt', req.body.email + "\n", (err) => {
        if (err) throw err;
    });
    res.render('thankyou',{mailAddress: req.body.email});
  });

module.exports = router;
