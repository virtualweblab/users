
var net = require('net');
var util = require('util')
//var events = require('events')
var EventEmitter = require('events').EventEmitter;

var socketTCP= function(port){
	this.port = port
	//var data_tcp = new events.EventEmitter()
	var data_tcp = this
	this.server = net.createServer(function(socket) {
		socket.name = socket.remoteAddress + ':' + socket.remotePort
		socket.on('data', function(data){
			//console.log('data: ' + data)
			socket.write('Data Ok: ')
			data_tcp.emit('data',data)
		})
		socket.write('Echo server Mauri\r\n');
	});

	this.server.listen(this.port, '127.0.0.1');
	return data_tcp
}
util.inherits(socketTCP, EventEmitter)

module.exports = socketTCP
