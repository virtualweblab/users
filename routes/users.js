var express = require('express');
var router = express.Router();

var Users = require('../helper')
var Usersdb = Users()

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

createUser = function(req, res){
	Usersdb.createUser(req, function(err, user){
		if (err) {
			res.send(err)
		}else{
			//res.send(user)
      res.render('login')
		}
	})
}

findUser = function(req, res){
	Usersdb.findUser(req, function(err, user){
		if (err) res.send(err)
		else res.send(user)
	})
}

findAllUsers = function(req, res){
	Usersdb.findAllUsers(function(err, users){
		if (err) res.send(err)
		else res.send(users)
	})
}

updateUser = function(req, res){
	Usersdb.updateUser
}

deleteUser = function(req, res){
	Usersdb.deleteUser
}

router.post('/createUser', createUser)
router.get('/user/:id', findUser)
router.get('/usersAll', findAllUsers)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

module.exports = router;
