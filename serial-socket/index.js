var net = require('net');
var tcp = require('./tcp') // uso solo directo del PLC
var async = require('async')
var socketIoPlc = require('./socketIoPlc')

module.exports = function (http){
	var io = require('socket.io')(http)
	var net = require('net');

/*
//  Uso exclusivo cuando hay una conexion PLC-Server
	var data_tcp_1 = new tcp(2000)
	var data_tcp_2 = new tcp(1337)
	var data_tcp_3 = new tcp(1336)
	var dataTCP = {data_tcp_1, data_tcp_2, data_tcp_3}
*/

	var socketIoPlc_1 = new socketIoPlc(8080)		// Lab 1
	var socketIoPlc_2 = new socketIoPlc(8000)		// Lab 2
	var socketIoPlc_3 = new socketIoPlc(2000)		// Lab 3

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
			var data_trama = {}
			data_trama.plc_1 = {}
			data_trama.plc_2 = {}
			data_trama.plc_3 = {}

			socketIoPlc_1.on('data', function(data){
				data_trama.plc_1 = data
				io.emit('serialCom', data_trama)
				//console.log('data')
				//io.emit('serialCom', data)
				//io.emit('serialCom', {'datos_1':data})
			})
			socketIoPlc_2.on('data', function(data){
				data_trama.plc_2 = data
				//console.log('data')
				//io.emit('serialCom', data)
				//io.emit('serialCom', {'datos_2':data})
			})
			socketIoPlc_3.on('data', function(data){
				data_trama.plc_3 = data
				//console.log('data')
				//io.emit('serialCom', data)
				//io.emit('serialCom', {'datos_3':data})
			})
		})
		callback(null, null)
	}

	function endSocket(err, result){
		console.log(result)
	}
}
