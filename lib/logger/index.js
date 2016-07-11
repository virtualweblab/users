/**
*
* @file Logs de la APP
* @author Mauricio Duque Orozco <mauricio.duque.eje@icloud.com>
* @copyright Mauricio Duque Orozco
*/

var winston = require('winston');
 
 module.exports = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      colorize: true,
      prettyPrint: true,
      level: 'debug',
      label: 'vwl-users'
    })
  ]
});
