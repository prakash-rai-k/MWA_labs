const fs = require('fs');
const zlib = require('zlib');
const gUnzip = zlib.createGunzip();
const readable = fs.createReadStream('./test.txt.zip');
const uncompressed = fs.createWriteStream('./newTest.txt');
readable.pipe(gUnzip).pipe(uncompressed);