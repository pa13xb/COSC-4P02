// Sheriff Abouchekeir

// Demonstrates loading a HTML page from a file via http and fs modules
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('demofile1.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

console.log('Go to localhost:8080 on your web browser to view results')
console.log('Hit Ctrl + C to terminate')