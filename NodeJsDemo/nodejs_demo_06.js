/**
 * Created by zhengjin on 2016/11/3.
 *
 * Demo use events refer to Node.js Tutorial.
 */
var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('data_received', function () {
    console.log('data received success!');
});

eventEmitter.emit('data_received');
eventEmitter.emit('data_received');
