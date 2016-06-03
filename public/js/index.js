var socket = io();

console.log('jj')

$('form').submit(function(){
  socket.emit('serialCom', $('#m').val());
  $('#m').val('');
  return false;
});
socket.on('serialCom', function(msg){
  $('#messages').append($('<p>').text(msg));
  	msg = msg.split("%")
    msg = msg.substring(2)
    $('#messages').text(msg[2]);
});

var smoothie = new SmoothieChart();
//smoothie.streamTo(document.getElementById("mycanvas"));
smoothie.streamTo(document.getElementById("mycanvas"), 1000 /*delay*/);
// Data
var line1 = new TimeSeries();
var line2 = new TimeSeries();

// Add a random value to each line every second
setInterval(function() {
  line1.append(new Date().getTime(), Math.random());
  line2.append(new Date().getTime(), Math.random());
}, 1000);

// Add to SmoothieChart
smoothie.addTimeSeries(line1);
smoothie.addTimeSeries(line2);
