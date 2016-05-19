var mongoose = require('mongoose');
//var User = mongoose.model('Users');
var User = require('../models')

var FacebookStrategy = require('passport-facebook').Strategy;

var config = require('./config');

module.exports = function(passport) {

	passport.serializeUser(function(user, done) {
		done(null, user);
	});

	passport.deserializeUser(function(obj, done) {
		done(null, obj);
	});


	// Configuración del autenticado con Facebook
	passport.use(new FacebookStrategy({
		clientID		: config.facebook.key,
		clientSecret	: config.facebook.secret,
		callbackURL	 	: '/auth/facebook/callback',
		profileFields 	: ['id', 'displayName', /*'provider',*/ 'photos', 'email']
	}, function(accessToken, refreshToken, profile, done) {
		
		User.findOne({provider_id: profile.id}, function(err, user) {
			if(err) throw(err);
			if(!err && user!= null) return done(null, user);

			var user = new User({
				provider_id		: profile.id,
				provider		: profile.provider,
				Name			: profile.displayName,
				Email 			: profile.Email,
				photo			: profile.photos[0].value
			});
			user.save(function(err) {
				if(err) throw err;
				done(null, user);
			});
		});
	}));

};
