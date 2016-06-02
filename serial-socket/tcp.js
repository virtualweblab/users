
var net = require('net');
var events = require('events')

module.exports = function(){
	var data_tcp = new events.EventEmitter()
	var server = net.createServer(function(socket) {
		socket.name = socket.remoteAddress + ':' + socket.remotePort
		socket.on('data', function(data){
			//console.log('data: ' + data)
			socket.write('Data Ok: ')
			data_tcp.emit('data',data)
		})
		socket.write('Echo server Mauri\r\n');
	});

	server.listen(1338, '127.0.0.1');
	return data_tcp
}

//console.log('socket')
// var tcp = require('./tcp')
// var data_tcp = tcp()


// io.on('connection', function(socket){
//     console.log('User Connect ' +  socket.id)
//     socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// 	// data_tcp.on('data', function(data){
// 	// 	console.log(data)
// 	// })
//
// 	data_tcp.getValueSocket(function(data){
// 		console.log(data)
// 	})
//
// 	socket.on('serialCom', function(msg){
//         console.log(msg)
//         io.emit('serialCom', msg)
//   })
// })

// var io = require('socket.io')(http)
// io.on('connection',function(webSocket){
// 	console.log('User Conected: ' + webSocket.id)
// 	webSocket.on('disconnect', function(){
// 		console.log('User disconnected: ' + webSocket.id)
// 	})
// })
	// var server = net.createServer(function(socketTCP){
	// 	socketTCP.name = socketTCP.remoteAddress + ':' + socketTCP.remotePort
	// 	socketTCP.on('data', function(dataTCP){
	// 		console.log(dataTCP)
	// 		socketTCP.write('Data Ok')
	// 	})
	// })
	// server.listen(1338, '127.0.0.1');
