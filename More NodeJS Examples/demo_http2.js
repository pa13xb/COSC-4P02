// Sheriff Abouchekeir

// Demonstrates the use of custom queries in the url
var http = require('http');
var url = require('url');

// create a server object:
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + ' ' + q.month;
    res.write(txt); 
    res.end();
}).listen(8080); // the server object listens on port 8080

console.log('Go to localhost:8080 on your web browser to view results')
console.log('Try localhost:8080/?year=2017&month=July')
console.log('Try localhost:8080/?year=2020&month=March')
console.log('Hit Ctrl + C to terminate')