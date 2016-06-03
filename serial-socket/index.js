
console.log('socket')
var net = require('net');
var tcp = require('./tcp')
var async = require('async')

module.exports = function (http){
	var io = require('socket.io')(http)
	var net = require('net');

	var data_tcp = new tcp(1338)
	var data_tcp2 = new tcp(1337)
	var data_tcp3 = new tcp(1336)

	async.waterfall([
		socketWeb,
		socketTCP
	], endSocket)

	function socketWeb(callback){
		io.on('connection', function(socket){
			console.log('User is connect: ' + socket.id);
			callback(null,socket)
		})
	}

	function socketTCP(socket, callback){
		socket.on('serialCom', function(){
			data_tcp.on('data', function(data){
				io.emit('serialCom', data)
				callback(null, data)
			})
		})
	}

	function endSocket(err, result){
		console.log(result)
	}
}
