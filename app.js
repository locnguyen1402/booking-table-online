const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
  // routes
const homepageRouter = require('./routes/homepage');
const bookingRouter = require('./routes/booking');
const loginRouter = require('./routes/login');

// init express constructor
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')));

// run MVC by middleware
app.use('/', homepageRouter);
app.use('/booking', bookingRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;