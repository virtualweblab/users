var socket = io();
socket.emit('serialCom', $('#m').val());
$('#m').val('');


var initChart_Flots = function(){
  var container = $("#flot-line-chart-moving");
  var container_2 = $("#flot-line-chart-moving_2");
  var container_3 = $("#flot-line-chart-moving_3");

  var canvas = document.createElement("canvas");
    canvas.width = container.outerWidth()
    canvas.height = container.outerHeight()
    canvas.id = "myCanvas"

  var canvas_2 = document.createElement("canvas");
    canvas_2.width = container.outerWidth()
    canvas_2.height = container.outerHeight()
    canvas_2.id = "myCanvas_2"

  var canvas_3 = document.createElement("canvas");
    canvas_3.width = container.outerWidth()
    canvas_3.height = container.outerHeight()
    canvas_3.id = "myCanvas_3"

  window.onresize = function(event) {
    canvas.width = container.outerWidth()
    canvas.height = container.outerHeight()
  };

  window.onresize = function(event) {
    canvas_2.width = container_2.outerWidth()
    canvas_2.height = container_2.outerHeight()
  };

  window.onresize = function(event) {
    canvas_3.width = container_3.outerWidth()
    canvas_3.height = container_3.outerHeight()
  };

  container.append(canvas);
  container_2.append(canvas_2);
  container_3.append(canvas_3);

  var gc = new DisplayChart(canvas)
  var intDply = new InitDisplay(document.getElementById('controls'))
  intDply.init(gc)

  var gc_2 = new DisplayChart(canvas_2)
  var intDply_2 = new InitDisplay(document.getElementById('controls_2'))
  intDply_2.init(gc_2)

  var gc_3 = new DisplayChart(canvas_3)
  var intDply_3 = new InitDisplay(document.getElementById('controls_3'))
  intDply_3.init(gc_3)

  socket.on('serialCom', function(msg){

    if (!$.isEmptyObject(msg.plc_1)) {
      gc.execute(msg.plc_3.entradas)
      gc_2.execute(msg.plc_3.salidas)
      gc_3.execute(msg.plc_1.analogas)
    }


  })

}

$(document).ready(function(){
  initChart_Flots()
})
