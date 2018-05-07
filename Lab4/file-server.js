const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if(fs.existsSync(__dirname + req.url)){
        fs.createReadStream(__dirname + req.url).pipe(res);
    } else if(req.url === '/api'){
        res.writeHead(200, {'Content-Type' : 'application/json'});
        var obj = {firstname : 'Prakash', lastname: 'Rai'};
        res.end(JSON.stringify(obj));
    } else{
        res.writeHead(404);
        res.end();
    }

}).listen(4000,'localhost');