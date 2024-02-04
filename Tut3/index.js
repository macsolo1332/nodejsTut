const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{ };

//intialize object
const myEmitter = new MyEmitter();

//add listener for log events 
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    //emit event 
    myEmitter.emit('log', 'Log event emitted');
},2000);
