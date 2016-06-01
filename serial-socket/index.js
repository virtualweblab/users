console.log('socket')
module.exports = function (http){
	var io = require('socket.io')(http)

	io.on('connection', function(socket){
      console.log('User Connect ' +  socket.id) 
      //serialComunicate(socket, done)
      socket.on('disconnect', function(){
	    console.log('user disconnected');
	  });

	  socket.on('serialCom', function(msg){
	        console.log(msg)
	        io.emit('serialCom', msg)
	    })
    })
}