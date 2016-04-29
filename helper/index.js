var User = require('../models')

module.exports = function(){

	createUser = function(req, callback){

		var user = new User({
			Name : req.body.Name,
			LastName : req.body.LastName,
			Password : req.body.Password,
			Email : req.body.Email
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

	deleteUser = function(req, callback){
		User.findById(req.params.id, function(err,user){
			user.remove(function (err){
				if (err) callback(err)
				else callback(null, user)
			})
		})
	}

	updateUser = function(req, callback){
		User.findById(req.params.id, function(err,user){

			user.Name = req.body.Name
			user.LastName = req.body.LastName
			user.Password = req.body.Password
			user.Email = req.body.Email
			//user.Projects = req.body.projects
			//user.Roll = req.body.roll

			user.save(function(err){
				if (err) callback(err)
				else callback(null, user)
			})
		})
	}

	findUser = function(req, callback){
		User.findById(req.params.id, function(err,user){
			if (err) callback(err)
			else callback(null, user)
		})
	}

	findAllUsers = function(callback){
		User.find(function(err, users){
			if (err) callback(err)
			else callback(null, users)
		})
	}

	return {
		createUser : createUser,
		deleteUser : deleteUser,
		updateUser : updateUser,
		findUser : findUser,
		findAllUsers : findAllUsers
	}
}
