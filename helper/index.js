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
			user.remove({_id : req.params.id },function (err){
				if (err) callback(err)
				else callback(null, user)
			})
		})
	}

	updateUser = function(req, callback){
		User.findById(req.params.id, function(err,user){
			if(err) callback(err)

			if(req.body.Name != undefined) user.Name = req.body.Name;
			if(req.body.LastName != undefined)user.LastName = req.body.LastName;
			if(req.body.Password != undefined)user.Password = req.body.Password;
			if(req.body.Email != undefined)user.Email = req.body.Email;
			if(req.body.Roll != undefined)user.Roll = req.body.Roll;


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

	findForLogin = function(req, callback){
		//console.log(req.body.Email)
		User.find({Email : req.body.Email,
					Password : req.body.Password},
					function(err, user){
						if(err) callback(err)
						if(!err && user) callback(null, user)
					})
	}

	return {
		createUser : createUser,
		deleteUser : deleteUser,
		updateUser : updateUser,
		findUser : findUser,
		findForLogin :findForLogin,
		findAllUsers : findAllUsers
	}
}
