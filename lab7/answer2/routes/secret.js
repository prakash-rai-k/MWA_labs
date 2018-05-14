var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'homework7';
var crypto = require('crypto'),
    algorithm = 'aes256',
    password = 'd6F3Efeq';
var decipherSecret = '';

MongoClient.connect(url, function(err, client){
    assert.equal(null, err);

    console.log('Connected successfully to server....');
    const db = client.db(dbName);
    db.collection('secret').findOne({}, function(err, doc){
        if(err) throw err;
        decipherSecret = decrypt(doc.message);
    });

    client.close();
});

function encrypt(text){
    var cipher = crypto.createCipher(algorithm,password)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
  }

function decrypt(text){
    var decipher = crypto.createDecipher(algorithm,password)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
  }

  /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('secret', { decrypWord: decipherSecret });
});

module.exports = router;
