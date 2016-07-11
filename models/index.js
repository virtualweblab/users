/**
*
* @file Modelo de la base de datos
* @author Mauricio Duque Orozco <mauricio.duque.eje@icloud.com>
* @copyright Mauricio Duque Orozco
*/

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var validator = require('node-mongoose-validator')


/**
 * Prototipo de la base de datos
 * @param {String} Name Nombre de usuario
 * @param {String} LastName Apellido de usuario
 * @param {Password} Password clave de usuario
 * @param {email} Email E-mail de usuario
 * @param {String} Roll Rol de usuario
 */
var users = new Schema({
	Name 	:	{type: String},
	LastName: 	{type: String},
	Password: 	{},
	Email 	: 	{type: String},
	Roll 	:	{type: String,
					enum : ['admin','user','student','profesor'],
					default: 'student'},
	provider_id : {},
	provider : {},
	photo : String,
	CreateDate	: 	{type: Date, default: Date.now}
})
users.path('Email').validate(validator.isEmail(),'Please validate the Email')
//users.path('Password').validate(validator.isAlphanumeric(),'Please validate the Password because needs aphanumeric')

module.exports = mongoose.model('Users', users)
