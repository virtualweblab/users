var socket = io();
var datosSmotie
var datosSmotieS
var datosSmotieA

$('form').submit(function(){
  socket.emit('serialCom', $('#m').val());
  $('#m').val('');
  return false;
});
$(document).ready(function(){
  socket.emit('serialCom', $('#m').val());
  $('#m').val('');
  socket.on('serialCom', function(msg){
    //msg = msg.substring(msg.indexOf('{'),msg.lastIndexOf('}'))
    //msg = msg.substring(msg.indexOf('{'),msg.indexOf('&'))
    //console.log(msg);

    $('#datosPLC_E').text(msg.entradas)
    $('#datosPLC_S').text(msg.salidas)
    $('#datosPLC_A').text(msg.analogas)

    datosSmotie = msg.entradas
    datosSmotieS = msg.salidas
    datosSmotieA = msg.analogas
    //$('#messages').append($('<p>').text(msg.entradas));
    //console.log(JSON.parse(msg))
    //console.log(msg.indexOf('{'))
    //console.log(msg.lastIndexOf('}'))
    //console.log(msg.substring(3,150))
    	//msg = msg.split("%")
      //msg = msg.substring(2)
    //$('#messages').text(msg[2]);
  });

  var smoothie = new SmoothieChart({
    grid: { strokeStyle:'rgb(125, 0, 0)', fillStyle:'rgb(60, 0, 0)',
            lineWidth: 1, millisPerLine: 250, verticalSections: 6, },
    labels: { fillStyle:'rgb(60, 0, 0)' }
  });
  //smoothie.streamTo(document.getElementById("mycanvas"));
  smoothie.streamTo(document.getElementById("mycanvas"), 1000 /*delay*/);
  // Data
  var line1 = new TimeSeries();
  var line2 = new TimeSeries();
  var line3 = new TimeSeries();
  var line4 = new TimeSeries();
  var line5 = new TimeSeries();
  var line6 = new TimeSeries();
  var line7 = new TimeSeries();
  var line8 = new TimeSeries();

  // Add a random value to each line every second
  setInterval(function() {
    line1.append(new Date().getTime(), datosSmotie[0]);
    line2.append(new Date().getTime(), datosSmotie[1]);
    line3.append(new Date().getTime(), datosSmotie[2]);
    line4.append(new Date().getTime(), datosSmotie[3]);
    line5.append(new Date().getTime(), datosSmotie[4]);
    line6.append(new Date().getTime(), datosSmotie[5]);
    line7.append(new Date().getTime(), datosSmotie[6]);
    line8.append(new Date().getTime(), datosSmotie[7]);
  }, 1000);

  smoothie.addTimeSeries(line1,
    { strokeStyle:'rgb(0, 255, 0)', fillStyle:'rgba(0, 255, 0, 0.4)', lineWidth:3 });
  smoothie.addTimeSeries(line2,
    { strokeStyle:'rgb(255, 0, 255)', fillStyle:'rgba(255, 0, 255, 0.3)', lineWidth:3 });

  smoothie.addTimeSeries(line3,
    { strokeStyle:'rgb(255,0,0)', fillStyle:'rgba(255,0,0, 0.4)', lineWidth:3 });
  smoothie.addTimeSeries(line4,
    { strokeStyle:'rgb(0, 0, 255)', fillStyle:'rgba(0, 0, 255, 0.3)', lineWidth:3 });
  smoothie.addTimeSeries(line5,
    { strokeStyle:'rgb(255, 255, 0)', fillStyle:'rgba(255, 255, 0, 0.4)', lineWidth:3 });
  smoothie.addTimeSeries(line6,
    { strokeStyle:'rgb(0, 255, 255)', fillStyle:'rgba(0, 255, 255, 0.3)', lineWidth:3 });
  smoothie.addTimeSeries(line7,
    { strokeStyle:'rgb(0, 100, 0)', fillStyle:'rgba(0, 100, 0, 0.4)', lineWidth:3 });
  smoothie.addTimeSeries(line8,
    { strokeStyle:'rgb(255, 100, 255)', fillStyle:'rgba(255, 100, 255, 0.3)', lineWidth:3 });

  // Add to SmoothieChart
  smoothie.addTimeSeries(line1);
  smoothie.addTimeSeries(line2);
  smoothie.addTimeSeries(line3);
  smoothie.addTimeSeries(line4);
  smoothie.addTimeSeries(line5);
  smoothie.addTimeSeries(line6);
  smoothie.addTimeSeries(line7);
  smoothie.addTimeSeries(line8);


  var smoothie_S = new SmoothieChart({
    grid: { strokeStyle:'rgb(125, 0, 0)', fillStyle:'rgb(60, 0, 0)',
            lineWidth: 1, millisPerLine: 250, verticalSections: 6, },
    labels: { fillStyle:'rgb(60, 0, 0)' }
  });
  //smoothie.streamTo(document.getElementById("mycanvas"));
  smoothie_S.streamTo(document.getElementById("mycanvas_S"), 1000 /*delay*/);
  // Data
  var line1_S = new TimeSeries();
  var line2_S = new TimeSeries();
  var line3_S = new TimeSeries();
  var line4_S = new TimeSeries();
  var line5_S = new TimeSeries();
  var line6_S = new TimeSeries();


  // Add a random value to each line every second
  setInterval(function() {
    line1_S.append(new Date().getTime(), datosSmotieS[0]);
    line2_S.append(new Date().getTime(), datosSmotieS[1]);
    line3_S.append(new Date().getTime(), datosSmotieS[2]);
    line4_S.append(new Date().getTime(), datosSmotieS[3]);
    line5_S.append(new Date().getTime(), datosSmotieS[4]);
    line6_S.append(new Date().getTime(), datosSmotieS[5]);
  }, 1000);

  smoothie_S.addTimeSeries(line1_S,
    { strokeStyle:'rgb(0, 255, 0)', fillStyle:'rgba(0, 255, 0, 0.4)', lineWidth:3 });
  smoothie_S.addTimeSeries(line2_S,
    { strokeStyle:'rgb(255, 0, 255)', fillStyle:'rgba(255, 0, 255, 0.3)', lineWidth:3 });

  smoothie_S.addTimeSeries(line3_S,
    { strokeStyle:'rgb(255,0,0)', fillStyle:'rgba(255,0,0, 0.4)', lineWidth:3 });
  smoothie_S.addTimeSeries(line4_S,
    { strokeStyle:'rgb(0, 0, 255)', fillStyle:'rgba(0, 0, 255, 0.3)', lineWidth:3 });
  smoothie_S.addTimeSeries(line5_S,
    { strokeStyle:'rgb(255, 255, 0)', fillStyle:'rgba(255, 255, 0, 0.4)', lineWidth:3 });
  smoothie_S.addTimeSeries(line6_S,
    { strokeStyle:'rgb(0, 255, 255)', fillStyle:'rgba(0, 255, 255, 0.3)', lineWidth:3 });

  // Add to SmoothieChart
  smoothie_S.addTimeSeries(line1_S);
  smoothie_S.addTimeSeries(line2_S);
  smoothie_S.addTimeSeries(line3_S);
  smoothie_S.addTimeSeries(line4_S);
  smoothie_S.addTimeSeries(line5_S);
  smoothie_S.addTimeSeries(line6_S);


})
