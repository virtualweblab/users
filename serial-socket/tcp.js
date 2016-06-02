var net = require('net');
var events = require('events')

module.exports = function(){
	var data_tcp = new events.EventEmitter()
	var server = net.createServer(function(socket) {
		socket.name = socket.remoteAddress + ':' + socket.remotePort
		socket.on('data', function(data){
			//console.log('data: ' + data)
			socket.write('Data Ok: ')
			setInterval(function(){
					data_tcp.emit('data',data)
			},500)
		})
		socket.write('Echo server Mauri\r\n');
	});

	server.listen(1338, '127.0.0.1');
	return data_tcp
}
