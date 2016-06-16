var socket = io();

socket.emit('serialCom', $('#m').val());
$('#m').val('');

var initChart = function (){


    gc_0 = new DisplayChart(document.getElementById("mycanvas0")),
    gc_1 = new DisplayChart(document.getElementById("mycanvas1")),
    gc_2 = new DisplayChart(document.getElementById("mycanvas2")),
    gc_3 = new DisplayChart(document.getElementById("mycanvas3")),
    gc_4 = new DisplayChart(document.getElementById("mycanvas4")),
    gc_5 = new DisplayChart(document.getElementById("mycanvas5")),
    gc_6 = new DisplayChart(document.getElementById("mycanvas6")),
    gc_7 = new DisplayChart(document.getElementById("mycanvas7")),
    gc_8 = new DisplayChart(document.getElementById("mycanvas8"))


  socket.on('serialCom', function(msg){
    for (var i in msg) {
      $('#datosPLC_E_' + i).text(msg[i].entradas)
      $('#datosPLC_S_' + i).text(msg[i].salidas)
      $('#datosPLC_A_' + i).text(msg[i].analogas)
    }

    if (!$.isEmptyObject(msg.plc_1)) {
      gc_0.execute(msg.plc_1.entradas)
      gc_1.execute(msg.plc_1.salidas)
      gc_2.execute(msg.plc_1.analogas)
    }

    if (!$.isEmptyObject(msg.plc_2)) {
      gc_3.execute(msg.plc_2.entradas)
      gc_4.execute(msg.plc_2.salidas)
      gc_5.execute(msg.plc_2.analogas)
    }

    if (!$.isEmptyObject(msg.plc_3)) {  
      gc_6.execute(msg.plc_3.entradas)
      gc_7.execute(msg.plc_3.salidas)
      gc_8.execute(msg.plc_3.analogas)
    }

  });

}

initChart()
