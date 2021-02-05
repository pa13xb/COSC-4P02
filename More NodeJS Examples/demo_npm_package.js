// Sheriff Abouchekeir

// Demonstrates the use of npm packages ('upper-case')
var http = require('http')
var uc = require('upper-case')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(uc.upperCase("Hello World"))
    res.end()
}).listen(8080)

console.log('Go to localhost:8080 on your web browser to view results')
console.log('Hit Ctrl + C to terminate')