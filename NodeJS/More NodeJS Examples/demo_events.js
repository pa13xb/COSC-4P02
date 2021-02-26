// Sheriff Abouchekeir

// Demostrates creating, handling and emitting events using the events modules

var events = require('events')
var eventEmitter = new events.EventEmitter()

var myEventHandler = function(){
    console.log('I hear a scream')
}

eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream') // Comment this to not scream

console.log('Go to localhost:8080 on your web browser to view results')
console.log('Hit Ctrl + C to terminate')