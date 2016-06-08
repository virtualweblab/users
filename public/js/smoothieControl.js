

$(document).ready(function(){
  var controlContainer = document.getElementById('controls')

  var controlDiv = document.createElement('div');
  controlDiv.className = 'panel-heading';
  controlDiv.appendChild(document.createTextNode("Text Of Data"))
  controlContainer.appendChild(controlDiv);

  var controlDiv2 = document.createElement('div');
  controlDiv2.className = 'panel-body';
  controlContainer.appendChild(controlDiv2);

  var controlDiv3 = document.createElement('div');
  controlDiv3.className = 'flot-chart';
  controlDiv2.appendChild(controlDiv3);

  var controlDiv4 = document.createElement('div');
  controlDiv4.className = 'flot-chart-content';
  controlDiv4.id = 'flot-line-chart-moving';
  controlDiv3.appendChild(controlDiv4);

  var canvas = document.createElement("canvas");
  canvas.className = 'img-responsive'
  canvas.width = $("#flot-line-chart-moving").outerWidth()
  canvas.height = $("#flot-line-chart-moving").outerHeight()
  canvas.id = "myCanvas"
  controlDiv4.appendChild(canvas)

    var smoothie = new SmoothieChart();
    smoothie.streamTo(document.getElementById("myCanvas"));
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

    var controlContainer = document.getElementById('controls')
    var controlDiv = document.createElement('div')
    controlDiv.className = 'control';
    controlContainer.appendChild(controlDiv);


})

// $(document).ready(function() {
//   var container = $("#flot-line-chart-moving");
//
//   var canvas = document.createElement("canvas");
//
//     canvas.width = container.outerWidth()
//     canvas.height = container.outerHeight()
//     canvas.id = "myCanvas"
//
//   window.onresize = function(event) {
//     canvas.width = container.outerWidth()
//     canvas.height = container.outerHeight()
//   };
//   //canvas.class = 'img-responsive'
//   //document.body.appendChild(canvas)
//   $("#flot-line-chart-moving").append(canvas);
//   $('myCanvas').addClass('img-responsive')
// //  document.getElementById(canvas.id).addClass('img-responsive')
//   var smoothie = new SmoothieChart();
//   smoothie.streamTo(document.getElementById("myCanvas"));
//     // Data
//   var line1 = new TimeSeries();
//   var line2 = new TimeSeries();
//
//   // Add a random value to each line every second
//   setInterval(function() {
//     line1.append(new Date().getTime(), Math.random());
//     line2.append(new Date().getTime(), Math.random());
//   }, 1000);
//
//   // Add to SmoothieChart
//   smoothie.addTimeSeries(line1);
//   smoothie.addTimeSeries(line2);
//
//   var controlContainer = document.getElementById('controls')
//   var controlDiv = document.createElement('div')
//   controlDiv.className = 'control';
//   controlContainer.appendChild(controlDiv);
// })
