// Stream will read the file in chunks
// if file size is bigger than the chunk then it will read a chunk and emit a 'data' event.
// Use encoding to convert data to String of hex
// Use highWaterMark to set the size of the chunk

const fs = require('fs');
const http = require('http');
const server = http.createServer();
server.on('request', (req, res) =>{
    const src = fs.createReadStream('./New.jpg');
    src.pipe(res);
}).listen(8013,"127.0.0.1");
