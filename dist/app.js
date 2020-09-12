"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _passport = _interopRequireDefault(require("passport"));

var _connectFlash = _interopRequireDefault(require("connect-flash"));

var _compression = _interopRequireDefault(require("compression"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cookieSession = _interopRequireDefault(require("cookie-session"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _db = _interopRequireDefault(require("./db"));

var _init = _interopRequireDefault(require("./api/auth/passport/init"));

var _login = _interopRequireDefault(require("./api/auth/login"));

var _signup = _interopRequireDefault(require("./api/auth/signup"));

var _logout = _interopRequireDefault(require("./api/auth/logout"));

var _user = _interopRequireDefault(require("./api/user/user.router"));

var _food = _interopRequireDefault(require("./api/food/food.router"));

var _history = _interopRequireDefault(require("./api/history/history.router"));

// api routes
_mongoose["default"].connect(_db["default"].url, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

var connection = _mongoose["default"].connection;
connection.once('open', function () {
  console.log('MongoDB database connection established successfully');
});
var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
app.set('views', _path["default"].join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use((0, _connectFlash["default"])());
app.use((0, _cookieParser["default"])());
app.use((0, _cookieSession["default"])({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 365 * 24 * 60 * 60 * 1000
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
(0, _init["default"])(_passport["default"]);
app.use((0, _helmet["default"])({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ['*'],
      styleSrc: ["'self'", 'http://*', "'unsafe-inline'"],
      scriptSrc: ["'self'", 'http://*', "'unsafe-inline'", "'unsafe-eval'"]
    }
  }
}));
app.use((0, _cors["default"])({
  origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000', 'http://192.168.0.15:3000'],
  credentials: true
}));

var shouldCompress = function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    return false;
  }

  return _compression["default"].filter(req, res);
};

app.use((0, _compression["default"])({
  filter: shouldCompress
}));
app.use('/api/login', (0, _login["default"])(_passport["default"]));
app.use('/api/signup', (0, _signup["default"])(_passport["default"]));
app.use('/api/logout', (0, _logout["default"])());
app.use('/api/user', _user["default"]);
app.use('/api/food', _food["default"]);
app.use('/api/history', _history["default"]);
app.get('/', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '../public', 'index.html'));
}); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next((0, _httpErrors["default"])(404));
}); // error handler
// eslint-disable-next-line no-unused-vars

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
var _default = app;
exports["default"] = _default;