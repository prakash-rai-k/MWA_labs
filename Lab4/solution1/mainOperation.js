const http = require('http');
const url = require('url');
const fs = require('fs');

process.on('message', (myPage) => {
    var myFile = fs.readFileSync(`${myPage}`, 'utf8');
    process.send(myFile);
});
