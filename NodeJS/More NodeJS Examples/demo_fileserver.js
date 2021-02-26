// Sheriff Abouchekeir

// Demostrates loading webpages through a file via url paths
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var filename = '.' + q.pathname;
    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 not found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

console.log('Go to localhost:8080 on your web browser to view results')
console.log('Try localhost:8080/summer.html')
console.log('Try localhost:8080/winter.html')
console.log('Hit Ctrl + C to terminate')