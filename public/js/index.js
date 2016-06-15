function DisplayChart (canvas){
  this.signals = [];
  this.smoothie;
  this.smoothieBackGraund = {
                                grid  : {
                                  strokeStyle:'rgb(125, 0, 0)',
                                  fillStyle:'rgb(60, 0, 0)',
                                  lineWidth : 1,
                                  millisPerLine: 250,
                                  verticalSections: 6,
                                },
                                labels: {
                                  fillStyle:'rgb(60, 0, 0)'
                                }
                              }
  this.delay = 1000;
  this.canvas = canvas
  this.signalStyle = [
    { strokeStyle:'rgb(0  , 255 , 0   )', fillStyle:'rgba(0   , 255 , 0   , 0.4)', lineWidth:3 },
    { strokeStyle:'rgb(255, 0   , 0   )', fillStyle:'rgba(255 , 0   , 0   , 0.4)', lineWidth:3 },
    { strokeStyle:'rgb(0  , 0   , 255 )', fillStyle:'rgba(0   , 0   , 255 , 0.4)', lineWidth:3 }
  ]


  this.estate = 0
}

DisplayChart.prototype.init = function(data){
  if (this.estate == 0) {
    this.smoothie = new SmoothieChart(this.smoothieBackGraund);
    this.smoothie.streamTo(this.canvas, this.delay);

    for (var i = 0; i < data.length; i++) {
      this.signals.push(new TimeSeries())
    }
    for (var i = 0; i < this.signals.length; i++) {
      this.signals[i].append(new Date().getTime(), 0)
      this.smoothie.addTimeSeries(this.signals[i], this.signalStyle[i])
    }

  }
  this.estate = 1
}

DisplayChart.prototype.execute = function(data){
  this.init(data)
  this.updataData(data)
}

DisplayChart.prototype.updataData = function (data) {
  for (var i = 0; i < data.length; i++) {
    this.signals[i].append(new Date().getTime(), data[i] );
  }
}
