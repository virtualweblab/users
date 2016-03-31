var User = require('../models')

module.exports = function(){

	createUser = function(req, callback){

		var user = new User({
			Name : req.body.name,
			LastName : req.body.lastName,
			Password : req.body.password,
			Email : req.body.email
		})
		user.save(function(err){
			if (err) {
				console.log('Creacion de usuario fallida, Err: ' + err)
				callback(err)
			}else{
				console.log('Creacion de usuario exitosa')
				callback(null, user)
			}
		})
	}


	return {
		createUser : createUser
	}
}