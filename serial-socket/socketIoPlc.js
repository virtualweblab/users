// Load requirements
var http = require('http'),
io = require('socket.io');

module.exports = function(){
  // Create server & socket
  var server = http.createServer(function(req, res){});
  server.listen(8080);
  io = io.listen(server);

  // Add a connect listener
  io.sockets.on('connection', function(socket)
  {
    console.log('Client connected.');

    // Disconnect listener
    socket.on('disconnect', function() {
      console.log('Client disconnected.');
    });
    socket.on('OMG', function(data){
      console.log(data);
    })
    socket.emit('news',{hello:'world'})
  });
}
