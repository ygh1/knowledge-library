const EventEmitter = require('events')

const event = new EventEmitter()
let fn = () => console.log('fn')
event.on('事件1', fn)

event.emit('事件1')
event.off('事件1', fn)
