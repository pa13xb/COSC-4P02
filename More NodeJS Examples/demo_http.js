// Sheriff Abouchekeir

// Demostrates creating a server and running a webpage using http module
var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);

console.log('Go to localhost:8080 on your web browser to view results')
console.log('Hit Ctrl + C to terminate')