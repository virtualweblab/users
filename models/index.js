var mongoose = require('mongoose')
var Schema = mongoose.Schema
var validator = require('node-mongoose-validator')

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