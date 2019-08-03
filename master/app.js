var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
onlyUser = '没有得到当前用户值';//定义一个全局当前用户(8月3号onlyUser还没有运用成功,从登陆界面进入可以得到,但是单纯刷新就不可以)
//(8月3号  可以了,把var去掉,就OK了了)
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userLogin = require('./routes/userLogin.js');
var userReg = require('./routes/userReg.js');
var userEditor = require('./routes/userEditor.js');
var userPage = require('./routes/userPersonal.js');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('../'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/',userLogin);
app.use('/',userReg);
app.use('/',userEditor);
app.use('/', userPage);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
