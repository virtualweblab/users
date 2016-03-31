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
			res.send(user)
		}
	})
}

router.post('/createUser', createUser)

module.exports = router;
