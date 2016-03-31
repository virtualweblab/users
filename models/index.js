var mongoose = require('mongoose')
var Schema = mongoose.Schema

var users = new Schema({
	Name : {},
	LastName : {},
	Password : {},
	Email : {},
	Projects : {},
	Roll : {}
})

module.exports = mongoose.model('Users', users)