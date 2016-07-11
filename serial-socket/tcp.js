/**
*
* @file Permite comunicacion mediante TCP directo del PLC y el servidor
* @author Mauricio Duque Orozco <mauricio.duque.eje@icloud.com>
* @copyright Mauricio Duque Orozco
*/
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
//this.server.listen(this.port, '172.30.236.15');
	//this.server.listen(this.port, '172.31.68.14');
	//

/**
 * @param  {String} port puerto de conexion
 * @param  {String} ip Ip local 
 * @return {Obj}   data_tcp   Devuelve objeto de comunicacion
 */
this.server.listen(this.port, '127.0.0.1');
	return data_tcp
}

util.inherits(socketTCP, EventEmitter)
module.exports = socketTCP
