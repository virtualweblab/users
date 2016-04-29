var express = require('express');
var router = express.Router();

var Users = require('../helper')
var Usersdb = Users()

/* GET home page. */
router.get('/login', function(req, res) {
  res.render('login');
});
router.get('/register', function(req, res){
	res.render('register')
})
router.get('/admin', function(req, res){
	res.render('admin')
})
router.get('/dashes', function(req, res){
	res.render('dashes')
})
router.get('/flots', function(req, res){
	res.render('flots')
})
router.get('/usersTable', function(req, res){
  Usersdb.findAllUsers(function(err, users){
		if (err) res.send(err)
		else res.render('userTable',{users:users})
	})
})

module.exports = router;
