/**
*
* @file Permite comunicacion mediante sockets y visualizacion con el servidor
* @author Mauricio Duque Orozco <mauricio.duque.eje@icloud.com>
* @copyright Mauricio Duque Orozco
*/


var net = require('net');
var tcp = require('./tcp') // uso solo directo del PLC
var async = require('async')
var socketIoPlc = require('./socketIoPlc')


/**
 * anonymous function - Exporta funcionalidades de la conexion
 *
 * @param  {type} http description
 * @return {type}      description
 */
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

	var socketIoPlc_1 = new socketIoPlc(8000)		// Lab 1
	//var socketIoPlc_2 = new socketIoPlc(8000)		// Lab 2
	//var socketIoPlc_3 = new socketIoPlc(8000)		// Lab 3

	async.waterfall([
		socketWeb,
		socketTCP
	], endSocket)


	/**
	 * socketWeb - Crea conexion con el cliente para establecer un socket
	 *
	 * @param  {type} callback description
	 * @return {type}          description
	 */
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

			/**
			 * socketIoPlc_1 - Socket para laboratorio #1
			 *
			 * @param  {type} 'SOCK_1'      description
			 * @param  {type} function(data description
			 * @return {type}               description
			 */
			socketIoPlc_1.on('SOCK_1', function(data){
				data_trama.plc_1 = data
				io.emit('serialCom', data_trama)
			})

			/**
			 * socketIoPlc_1 - Socket para laboratorio #2
			 *
			 * @param  {type} 'SOCK_2'      description
			 * @param  {type} function(data description
			 * @return {type}               description
			 */
			socketIoPlc_1.on('SOCK_2', function(data){
				data_trama.plc_2 = data
				io.emit('serialCom', data_trama)
			})

			/**
			 * socketIoPlc_1 - Socket para laboratorio #3
			 *
			 * @param  {type} 'SOCK_3'      description
			 * @param  {type} function(data description
			 * @return {type}               description
			 */
			socketIoPlc_1.on('SOCK_3', function(data){
				data_trama.plc_3 = data
				io.emit('serialCom', data_trama)
			})
		})
		callback(null, null)
	}

	/**
	 * endSocket - Finalizacion de la serie async
	 *
	 * @param  {type} err    description
	 * @param  {type} result description
	 * @return {type}        description
	 */
	function endSocket(err, result){
		console.log(result)
	}
}
