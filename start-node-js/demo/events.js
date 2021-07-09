const EventEmitter = require('events')

const emitter = new EventEmitter()

// emitter.on('anything', data => {
// 		console.log('On: anything', data)
// })
//
// emitter.emit('anything', {a: 1})
// emitter.emit('anything', {a: 2})
//
// setTimeout(() => {
// 		emitter.emit('anything', {a: 3})
// }, 1500)


class Dispatcher extends EventEmitter {
	subscribe(eventName, data) {
			console.log('[Subscribe...]')
			this.on(eventName, data)
	}

		dispatch(eventName, data) {
				console.log('[Dispatching...]')
				this.emit(eventName, data)
		}
}


const dis = new Dispatcher()

dis.subscribe('aa', data => {
		console.log('ON: aa', data)
})

dis.dispatch('aa', { aa: 22 })