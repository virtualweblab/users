
console.log('socket')
var net = require('net');
var tcp = require('./tcp')

module.exports = function (http){
	var io = require('socket.io')(http)
	var net = require('net');
	var data_tcp = new tcp(1338)

	io.on('connection', function(socket){
      console.log('User Connect ' +  socket.id)
      socket.on('disconnect', function(){
	    console.log('user disconnected');
	});

			socket.on('serialCom', function(msg){
		        console.log(msg)
		        //io.emit('serialCom', msg)
						data_tcp.on('data', function(data){
							console.log(data + 'l')
							var dataTCP = data + '/'
							io.emit('serialCom', dataTCP)
						})
		  })
  })
}
