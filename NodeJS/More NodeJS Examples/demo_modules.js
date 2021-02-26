// Sheriff Abouchekeir

// Demonstrates the use of custom modules
var http = require('http');
var dt = require('./custom_module')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('The date and time are currently: ' + dt.myDateTime());
    res.end();
}).listen(8080);

console.log('Go to localhost:8080 on your web browser to view results')
console.log('Hit Ctrl + C to terminate')