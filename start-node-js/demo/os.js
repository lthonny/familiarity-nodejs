const os = require('os')

console.log('операционная система:', os.platform())

console.log('архитектура процессора:', os.arch())

console.log('информация процессора:', os.cpus())

console.log('свободная память:', os.freemem())

console.log('всего памяти:', os.totalmem())

console.log('домашняя директория:', os.homedir())

console.log('включен:', os.uptime())