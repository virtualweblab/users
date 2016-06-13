$(document).ready(function() {
  var container = $("#flot-line-chart-moving");

  var canvas = document.createElement("canvas");
    canvas.width = container.outerWidth()
    canvas.height = container.outerHeight()
    canvas.id = "myCanvas"

  window.onresize = function(event) {
    canvas.width = container.outerWidth()
    canvas.height = container.outerHeight()
  };

  container.append(canvas);

  var controlContainer = document.getElementById('controls')
  var slider = document.createElement('input');
  slider.id = 'slides';
  slider.type = 'range';
  slider.min = 0;
  slider.max = 100;
  controlContainer.appendChild(slider);

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

  // var controlContainer = document.getElementById('controls')
  // var controlDiv = document.createElement('div')
  // controlDiv.className = 'control';
  // controlContainer.appendChild(controlDiv);

})
