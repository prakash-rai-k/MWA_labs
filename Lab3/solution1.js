const dns = require('dns');

dns.lookup('www.mum.edu', function(err, address){
    if(err){
        console.log(err);
    }
    console.log(`Ip adress : ${address}`)
});