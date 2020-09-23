"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _http = _interopRequireDefault(require("http"));

var _debug = _interopRequireDefault(require("debug"));

var _pingmydyno = _interopRequireDefault(require("pingmydyno"));

var _app = _interopRequireDefault(require("../app"));

/* eslint-disable no-restricted-globals */
var debug = (0, _debug["default"])('fymdaily:server');

var normalizePort = function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

var port = normalizePort(process.env.PORT || '4000');

_app["default"].set('port', port);

var server = _http["default"].createServer(_app["default"]);

var onError = function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? "Pipe ".concat(port) : "Port ".concat(port);

  switch (error.code) {
    case 'EACCES':
      console.error("".concat(bind, " requires elevated privileges"));
      process.exit(1);
      break;

    case 'EADDRINUSE':
      console.error("".concat(bind, " is already in use"));
      process.exit(1);
      break;

    default:
      throw error;
  }
};

var onListening = function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? "pipe ".concat(addr) : "port ".concat(addr.port);
  debug("Listening on ".concat(bind));
  console.log("Listening on ".concat(bind));
};

console.log("NODE_ENV: ".concat(process.env.NODE_ENV));
server.listen(port, function () {
  (0, _pingmydyno["default"])('https://fymdaily.herokuapp.com');
});
server.on('error', onError);
server.on('listening', onListening);