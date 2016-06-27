var express = require('express');
var router = express.Router();

var Users = require('../helper')
var Usersdb = Users()

var session = require('express-session')

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
	Usersdb.updateUser(req,function(err, user){
		if (err) res.send(err)
		else res.redirect('/usersTable')
	})
}

deleteUser = function(req, res){
	Usersdb.deleteUser(req, function(err, user){
		if (err) res.send(err)
		else res.redirect('/usersTable')
	})
}

findForLogin = function(req,res){
	Usersdb.findForLogin(req,function(err, user){
		if (err) {
			res.redirect('/login')
		}
		else{
			req.session.user = user
			req.session.auth = true
			res.redirect('/admin')
		}
	})
}

router.post('/createUser', createUser)
router.get('/user/:id', findUser)
router.get('/usersAll', findAllUsers)
router.post('/update/:id', updateUser)
router.get('/delete/:id', deleteUser)
router.post('/findPass', findForLogin)

module.exports = router;
