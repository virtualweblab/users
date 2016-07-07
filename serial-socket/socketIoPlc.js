/*
  Permite comunicacion mediante sockets

*/



// Load requirements
var http = require('http')
var util = require('util')

var EventEmitter = require('events').EventEmitter;

var socketIoPlc = function(port){
  var dataIoPLC = this
  var io = require('socket.io')
  // Create server & socket
  this.server = http.createServer(function(req, res){});
  this.server.listen(port);
  io = io.listen(this.server);

  // Add a connect listener
  io.sockets.on('connection', function(socket){
    console.log('Client connected.');

    // Disconnect listener
    socket.on('disconnect', function() {
      console.log('Client disconnected.');
    });
    socket.on('SOCKET_1', function(data){
      dataIoPLC.emit('SOCK_1', data.dataADQ)
    })
    socket.on('SOCKET_2', function(data){
      dataIoPLC.emit('SOCK_2', data.dataADQ)
    })
    socket.on('SOCKET_3', function(data){
      dataIoPLC.emit('SOCK_3', data.dataADQ)
    })
    socket.emit('news',{hello:'world'})
  });
}

util.inherits(socketIoPlc,EventEmitter)
module.exports = socketIoPlc
