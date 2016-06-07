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
  io.sockets.on('connection', function(socket)
  {
    console.log('Client connected.');

    // Disconnect listener
    socket.on('disconnect', function() {
      console.log('Client disconnected.');
    });
    socket.on('OMG', function(data){
      //var data_chain = '%' + data + '%'
      //console.log(data.dataADQ);
      dataIoPLC.emit('data', data.dataADQ)
    })
    socket.emit('news',{hello:'world'})
  });
}

util.inherits(socketIoPlc,EventEmitter)
module.exports = socketIoPlc

// var http = require('http'),
//     io = require('socket.io');
// var EventEmitter = require('events').EventEmitter;
//
// var socketIoPlc = function(port){
//   dataIoPLC = this
//   // Create server & socket
//   var server = http.createServer(function(req, res){});
//   server.listen(port);
//   io = io.listen(server);
//
//   // Add a connect listener
//   io.sockets.on('connection', function(socket)
//   {
//     console.log('Client connected.');
//
//     // Disconnect listener
//     socket.on('disconnect', function() {
//       console.log('Client disconnected.');
//     });
//     socket.on('OMG', function(data){
//       console.log(data);
//     })
//     socket.emit('news',{hello:'world'})
//   });
// }
//
// module.exports = socketIoPlc
