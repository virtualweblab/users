var express = require('express');
var router = express.Router();

var Users = require('../helper')
var Usersdb = Users()

router.get('/',function(req,res){
	res.render('index')
})
router.get('/panelcontrol',function(req,res){
	res.render('panelcontrol')
})



/* GET home page. */
router.get('/login', function(req, res) {
  res.render('login');
});
router.get('/register', function(req, res){
	res.render('register')
})
router.get('/admin', function(req, res){
	if(req.session.auth){
		if(!req.user) req.user = req.session.user[0]
		res.render('admin',{title: 'VWL',
	    					user: req.user})
	}else{
		res.redirect('/Logout')
	}
})
router.get('/dashes', function(req, res){
	res.render('dashes')
})
router.get('/flots', function(req, res){
	res.render('flots', {vapor:'vapor'})
})
router.get('/refri', function(req, res){
	res.render('flots' , {refri:'refri'})
})
router.get('/oleo', function(req, res){
	res.render('flots', {oleo:'oleo'} )
})
router.get('/usersTable', function(req, res){
	if(req.session.auth /*&& req.user.Roll == 'admin' */){
		Usersdb.findAllUsers(function(err, users){
			if (err) res.send(err)
			else res.render('userTable',{users:users})
		})
	}
	else{
		res.redirect('/admin')
	}
})

module.exports = router;
