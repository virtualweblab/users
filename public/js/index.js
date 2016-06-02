var socket = io();

console.log('jj')

$('form').submit(function(){
  socket.emit('serialCom', $('#m').val());
  $('#m').val('');
  return false;
});
socket.on('serialCom', function(msg){
  $('#messages').append($('<li>').text(msg));
  	msg = msg.split("%")
	$('#messages').text(msg[1]);
});