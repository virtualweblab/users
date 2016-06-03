
var net = require('net');
var util = require('util')


var EventEmitter = require('events').EventEmitter;

var socketTCP= function(port){
	this.port = port
	var data_tcp = this

	this.server = net.createServer(function(socket) {
		socket.name = socket.remoteAddress + ':' + socket.remotePort
		socket.on('data', function(data){
			socket.write('Data Ok: ')
			var data_chain = '%' + data + '%'
			data_tcp.emit('data',data_chain)
		})
	});

	this.server.listen(this.port, '127.0.0.1');
	return data_tcp
}

util.inherits(socketTCP, EventEmitter)
module.exports = socketTCP
