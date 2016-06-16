function InitDisplay (controlContainer){
  this.interpolar;
  this.minValue;
  this.maxValue;
  this.scrollBackwards;
  this.labels;
  this.timestampFormatte;

  this.textDataGui;
  this.gui;

  this.controlContainer;

  this.optionsGUI = {
    interpolacion : '',
    minValue : -1,
    maxValue : 1,
    scrollBack : false,
    labels : false,
    timestampFormatte : false
  }

  this.controlContainer = controlContainer
}

InitDisplay.prototype.init = function(gc){

  this.gui = new dat.GUI({ autoPlace: false })

  this.interpolar = this.gui.add(this.optionsGUI, 'interpolacion', ['bezier','linear','step'])

  this.minValue = this.gui.add(this.optionsGUI, 'minValue')
  this.maxValue = this.gui.add(this.optionsGUI, 'maxValue')

  this.scrollBackwards = this.gui.add(this.optionsGUI, 'scrollBack')

  this.labels = this.gui.add(this.optionsGUI, 'labels')

  this.timestampFormatte = this.gui.add(this.optionsGUI, 'timestampFormatte')

  this.controlContainer.appendChild(this.gui.domElement);

  this.eventsGui(gc)
}

InitDisplay.prototype.eventsGui = function (gc) {
  this.interpolar.onChange(function(value){
    gc.smoothie.options.interpolation = value
  })

  this.minValue.onChange(function (value) {
    gc.smoothie.options.minValue = value
  })

  this.maxValue.onChange(function (value) {
    gc.smoothie.options.maxValue = value
  })

  this.scrollBackwards.onChange(function(value){
    gc.smoothie.options.scrollBackwards = value
  })

  this.labels.onChange(function(value){
    gc.smoothie.options.labels.disabled = value
  })

  this.timestampFormatte.onChange(function(value){
    if (value) {
      gc.smoothie.options.timestampFormatter = SmoothieChart.timeFormatter
    }else {
      gc.smoothie.options.timestampFormatter = ''
    }
  })
}
