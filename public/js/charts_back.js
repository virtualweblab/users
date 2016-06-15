var socket = io();
var init = 0;

$(document).ready(function(){

  var smoothie = []
  var line_Entrada = []
  var line_Salidas = []
  var line_Analogas = []

  for (var i = 0; i < 9; i++) {
    smoothie.push(new SmoothieChart())
    smoothie[i].streamTo(document.getElementById("mycanvas" + i));
  }

  socket.emit('serialCom', $('#m').val());
  $('#m').val('');

  socket.on('serialCom', function(msg){
    actualizateDash(msg)
    if (init == 0) createLines(msg)
  });

  function createLines(data) {
    for (var i in data) {
      for (var j in data[i].entradas) {
        var line = new TimeSeries()
        line_Entrada.push(line)
        //console.log(data[i].entradas[j]);
      }
    }

    for (var i in data) {
      for (var j in data[i].salidas) {
        var line = new TimeSeries()
        line_Salidas.push(line)
        //console.log(data[i].entradas[j]);
      }
    }

    for (var i in data) {
      for (var j in data[i].analogas) {
        var line = new TimeSeries()
        line_Analogas.push(line)
        //console.log(data[i].entradas[j]);
      }
    }

    // console.log(line_Entrada);
    // console.log(line_Salidas);
    // console.log(line_Analogas);
    series()
    init = 1
  }

  function actualizateDash(data) {
    for (var i in data) {
      $('#datosPLC_E_' + i).text(data[i].entradas)
      $('#datosPLC_S_' + i).text(data[i].salidas)
      $('#datosPLC_A_' + i).text(data[i].analogas)

    }

    for (var i = 0; i < line_Entrada.length; i++) {
      line_Entrada[i].append(new Date().getTime(), Math.random());
    }
    for (var i = 0; i < line_Salidas.length; i++) {
      line_Salidas[i].append(new Date().getTime(), Math.random());
    }
    for (var i = 0; i < line_Analogas.length; i++) {
      line_Analogas[i].append(new Date().getTime(), Math.random());
    }

  }

  function series() {
    for (var i = 0; i < 3; i++) {
      smoothie[0].addTimeSeries(line_Entrada[i])
    }
  }
})

// var datosSmotieE
// var datosSmotieS
// var datosSmotieA
// $(document).ready(function(){
//
//   // var datosSmotie
//   // var datosSmotieS
//   // var datosSmotieA
//
//   var datosSmotieE = []
//   var datosSmotieS = []
//   var datosSmotieA = []
//
//   socket.emit('serialCom', $('#m').val());
//   $('#m').val('');
//   socket.on('serialCom', function(msg){
//     actualizateDash(msg)
//   });
//
//   function actualizateDash(data) {
//     for (var i in data) {
//       $('#datosPLC_E_' + i).text(data[i].entradas)
//       $('#datosPLC_S_' + i).text(data[i].salidas)
//       $('#datosPLC_A_' + i).text(data[i].analogas)
//
//       datosSmotieE.push(data[i].entradas)
//       datosSmotieS.push(data[i].salidas)
//       datosSmotieA.push(data[i].analogas)
//
//       console.log(datosSmotieE);
//     }
// })



  // datosSmotie = msg.plc_1.entradas
  // datosSmotieS = msg.plc_1.salidas
  // datosSmotieA = msg.plc_1.analogas
//}

// var smoothie = new SmoothieChart({
//   grid: { strokeStyle:'rgb(125, 0, 0)', fillStyle:'rgb(60, 0, 0)',
//           lineWidth: 1, millisPerLine: 250, verticalSections: 6, },
//   labels: { fillStyle:'rgb(60, 0, 0)' }
// });
// //smoothie.streamTo(document.getElementById("mycanvas"));
// smoothie.streamTo(document.getElementById("mycanvas"), 1000 /*delay*/);
// // Data
// var line1 = new TimeSeries();
// var line2 = new TimeSeries();
// var line3 = new TimeSeries();
// var line4 = new TimeSeries();
// var line5 = new TimeSeries();
// var line6 = new TimeSeries();
// var line7 = new TimeSeries();
// var line8 = new TimeSeries();
//
// // Add a random value to each line every second
// setInterval(function() {
//   line1.append(new Date().getTime(), datosSmotie[0]);
//   line2.append(new Date().getTime(), datosSmotie[1]);
//   line3.append(new Date().getTime(), datosSmotie[2]);
//   line4.append(new Date().getTime(), datosSmotie[3]);
//   line5.append(new Date().getTime(), datosSmotie[4]);
//   line6.append(new Date().getTime(), datosSmotie[5]);
//   line7.append(new Date().getTime(), datosSmotie[6]);
//   line8.append(new Date().getTime(), datosSmotie[7]);
// }, 1000);
//
// smoothie.addTimeSeries(line1,
//   { strokeStyle:'rgb(0, 255, 0)', fillStyle:'rgba(0, 255, 0, 0.4)', lineWidth:3 });
// smoothie.addTimeSeries(line2,
//   { strokeStyle:'rgb(255, 0, 255)', fillStyle:'rgba(255, 0, 255, 0.3)', lineWidth:3 });
//
// smoothie.addTimeSeries(line3,
//   { strokeStyle:'rgb(255,0,0)', fillStyle:'rgba(255,0,0, 0.4)', lineWidth:3 });
// smoothie.addTimeSeries(line4,
//   { strokeStyle:'rgb(0, 0, 255)', fillStyle:'rgba(0, 0, 255, 0.3)', lineWidth:3 });
// smoothie.addTimeSeries(line5,
//   { strokeStyle:'rgb(255, 255, 0)', fillStyle:'rgba(255, 255, 0, 0.4)', lineWidth:3 });
// smoothie.addTimeSeries(line6,
//   { strokeStyle:'rgb(0, 255, 255)', fillStyle:'rgba(0, 255, 255, 0.3)', lineWidth:3 });
// smoothie.addTimeSeries(line7,
//   { strokeStyle:'rgb(0, 100, 0)', fillStyle:'rgba(0, 100, 0, 0.4)', lineWidth:3 });
// smoothie.addTimeSeries(line8,
//   { strokeStyle:'rgb(255, 100, 255)', fillStyle:'rgba(255, 100, 255, 0.3)', lineWidth:3 });
//
// // Add to SmoothieChart
// smoothie.addTimeSeries(line1);
// smoothie.addTimeSeries(line2);
// smoothie.addTimeSeries(line3);
// smoothie.addTimeSeries(line4);
// smoothie.addTimeSeries(line5);
// smoothie.addTimeSeries(line6);
// smoothie.addTimeSeries(line7);
// smoothie.addTimeSeries(line8);
//
//
// var smoothie_S = new SmoothieChart({
//   grid: { strokeStyle:'rgb(125, 0, 0)', fillStyle:'rgb(60, 0, 0)',
//           lineWidth: 1, millisPerLine: 250, verticalSections: 6, },
//   labels: { fillStyle:'rgb(60, 0, 0)' }
// });
// //smoothie.streamTo(document.getElementById("mycanvas"));
// smoothie_S.streamTo(document.getElementById("mycanvas_S"), 1000 /*delay*/);
// // Data
// var line1_S = new TimeSeries();
// var line2_S = new TimeSeries();
// var line3_S = new TimeSeries();
// var line4_S = new TimeSeries();
// var line5_S = new TimeSeries();
// var line6_S = new TimeSeries();
//
//
// // Add a random value to each line every second
// setInterval(function() {
//   line1_S.append(new Date().getTime(), datosSmotieS[0]);
//   line2_S.append(new Date().getTime(), datosSmotieS[1]);
//   line3_S.append(new Date().getTime(), datosSmotieS[2]);
//   line4_S.append(new Date().getTime(), datosSmotieS[3]);
//   line5_S.append(new Date().getTime(), datosSmotieS[4]);
//   line6_S.append(new Date().getTime(), datosSmotieS[5]);
// }, 1000);
//
// smoothie_S.addTimeSeries(line1_S,
//   { strokeStyle:'rgb(0, 255, 0)', fillStyle:'rgba(0, 255, 0, 0.4)', lineWidth:3 });
// smoothie_S.addTimeSeries(line2_S,
//   { strokeStyle:'rgb(255, 0, 255)', fillStyle:'rgba(255, 0, 255, 0.3)', lineWidth:3 });
//
// smoothie_S.addTimeSeries(line3_S,
//   { strokeStyle:'rgb(255,0,0)', fillStyle:'rgba(255,0,0, 0.4)', lineWidth:3 });
// smoothie_S.addTimeSeries(line4_S,
//   { strokeStyle:'rgb(0, 0, 255)', fillStyle:'rgba(0, 0, 255, 0.3)', lineWidth:3 });
// smoothie_S.addTimeSeries(line5_S,
//   { strokeStyle:'rgb(255, 255, 0)', fillStyle:'rgba(255, 255, 0, 0.4)', lineWidth:3 });
// smoothie_S.addTimeSeries(line6_S,
//   { strokeStyle:'rgb(0, 255, 255)', fillStyle:'rgba(0, 255, 255, 0.3)', lineWidth:3 });
//
// // Add to SmoothieChart
// smoothie_S.addTimeSeries(line1_S);
// smoothie_S.addTimeSeries(line2_S);
// smoothie_S.addTimeSeries(line3_S);
// smoothie_S.addTimeSeries(line4_S);
// smoothie_S.addTimeSeries(line5_S);
// smoothie_S.addTimeSeries(line6_S);
//
// var smoothie_A = new SmoothieChart({
//   grid: { strokeStyle:'rgb(125, 0, 0)', fillStyle:'rgb(60, 0, 0)',
//           lineWidth: 1, millisPerLine: 250, verticalSections: 6, },
//   labels: { fillStyle:'rgb(60, 0, 0)' }
// });
// //smoothie.streamTo(document.getElementById("mycanvas"));
// smoothie_A.streamTo(document.getElementById("mycanvas_A"), 1000 /*delay*/);
// // Data
// var line1_A = new TimeSeries();
// var line2_A = new TimeSeries();
//
//
// // Add a random value to each line every second
// setInterval(function() {
//   line1_A.append(new Date().getTime(), datosSmotieA[0]);
//   line2_A.append(new Date().getTime(), datosSmotieA[1]);
// }, 1000);
//
// smoothie_A.addTimeSeries(line1_A,
//   { strokeStyle:'rgb(0, 255, 0)', fillStyle:'rgba(0, 255, 0, 0.4)', lineWidth:3 });
// smoothie_A.addTimeSeries(line2_A,
//   { strokeStyle:'rgb(255, 0, 255)', fillStyle:'rgba(255, 0, 255, 0.3)', lineWidth:3 });
//
//
// // Add to SmoothieChart
// smoothie_A.addTimeSeries(line1_A);
// smoothie_A.addTimeSeries(line2_A);
//
