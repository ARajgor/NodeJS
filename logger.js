const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter{
    log(msg){
        //call event
        console.log("Im called")
        this.emit('message', {id: uuid.v4(), msg})
    }
}

module.exports = Logger;