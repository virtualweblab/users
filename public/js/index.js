/**
*
* @file Genera los Smoothie para visualización
* @author Mauricio Duque Orozco <mauricio.duque.eje@icloud.com>
* @copyright Mauricio Duque Orozco
*/


/**
 * DisplayChart - Genera los cambas de visualizacion
 *
 * @param  {type} canvas Canvas
 * @return {type}        description
 */
function DisplayChart (canvas){
  this.signals = [];
  this.smoothie;
  this.smoothieOptions = {
                            // grid  : {
                            //   strokeStyle:'rgb(125, 0, 0)',
                            //   fillStyle:'rgb(60, 0, 0)',
                            //   lineWidth : 1,
                            //   millisPerLine: 250,
                            //   verticalSections: 6,
                            // },
                            // labels: {
                            //   fillStyle:'rgb(60, 0, 0)',
                            //   disabled : false
                            // }
                          }
  this.delay = 1000;
  this.canvas = canvas

  // ojo que solo tiene para 3 señales, esta variable no esta en uso
  this.signalStyle = [
    // { strokeStyle:'rgb(0  , 255 , 0   )', fillStyle:'rgba(0   , 255 , 0   , 0.4)', lineWidth:3 },
    // { strokeStyle:'rgb(255, 0   , 0   )', fillStyle:'rgba(255 , 0   , 0   , 0.4)', lineWidth:3 },
    // { strokeStyle:'rgb(0  , 0   , 255 )', fillStyle:'rgba(0   , 0   , 255 , 0.4)', lineWidth:3 }
  ]
  this.colorStroke;


  this.estate = 0
}


/**
 * DisplayChart.prototype.init - Inicia graficado
 *
 * @param  {type} data Datos del websocket para graficado
 * @return {type}      description
 */
DisplayChart.prototype.init = function(data){
  if (this.estate == 0) {
    this.smoothie = new SmoothieChart(this.smoothieOptions);
    this.smoothie.streamTo(this.canvas, this.delay);


      for (var i = 0; i < data.length; i++) {
        this.signals.push(new TimeSeries())
      }
      for (var i = 0; i < this.signals.length; i++) {
        this.signals[i].append(new Date().getTime(), 0)

        this.smoothie.addTimeSeries(this.signals[i], { strokeStyle: this.getRandomColor(), lineWidth:3 })
      }


  }
  this.estate = 1
  //this.smoothie.options.interpolation = 'step'
}

/**
 * DisplayChart.prototype.getRandomColor - Genera los colores de cada linea dependiendo
 * de la cantidad de datos a graficar
 *
 * @return {type}  description
 */
DisplayChart.prototype.getRandomColor = function(){
  this.colorStroke = 'rgb(' + (Math.random()*256|100).toString() + ',' +
                              (Math.random()*256|100).toString() + ',' +
                              (Math.random()*256|100).toString() + ')'
  return this.colorStroke
}


/**
 * DisplayChart.prototype.execute - Core de cada uno de los GUI
 *
 * @param  {type} data Datos de adquisicion de datos
 * @return {type}      description
 */
DisplayChart.prototype.execute = function(data){
  this.init(data)
  this.updataData(data)
}


/**
 * anonymous function - Genera la linea de secuencia
 *
 * @param  {type} data Datos
 * @return {type}      description
 */
DisplayChart.prototype.updataData = function (data) {
  for (var i = 0; i < data.length; i++) {
    this.signals[i].append(new Date().getTime(), data[i] );
  }
}
