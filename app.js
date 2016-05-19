var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var routes = require('./routes/index');
var users = require('./routes/users');

var passport = require('passport')
var mongoose = require('mongoose')

require('./middleware/passport')(passport);

mongoose.connect('mongodb://localhost/vwlUsuarios',function(err, res){
    if (err) {
        console.log('Conexion a la base de datos fallida, Error: ' + err)
    }else{
        console.log('Conexion a la base de datos exitosa')
    }
})

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'bower_components')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));



app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/users', users);


app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/login');
});
// Ruta para autenticarse con Twitter (enlace de login)

app.get('/auth/facebook', passport.authenticate('facebook'));

/*app.get('/auth/facebook/callback', passport.authenticate('facebook',
  { successRedirect: '/admin', failureRedirect: '/login' })
);*/

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/admin');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
