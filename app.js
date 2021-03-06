var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('express-flash');
var expressSession = require('express-session');
var RedisStore = require('connect-redis')(expressSession);
var i18n = require('i18n');
var multer  = require('multer');

var models = require('./models');

var passport = require('./config/passport')(passport);

var app = express();

// app.locals.store = new RedisStore(
//   {
//     host: 'pub-redis-10929.ap-southeast-1-1.1.ec2.garantiadata.com',
//     port: '10929',
//     pass: 'poi'
//   }
// );

app.locals.passport = passport;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession({
    // store: app.locals.store,
    secret: 'mySecretKey',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

i18n.configure({
  locales:['en'],
  defaultLocale: 'en',
  objectNotation: true,
  cookie: 'locale',
  directory: path.join(__dirname, 'locales')
});

app.use(i18n.init);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(multer({ 
  dest: path.join(__dirname, 'uploads'),
  putSingleFilesInArray: true
}))

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
