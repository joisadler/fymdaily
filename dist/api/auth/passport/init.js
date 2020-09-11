"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _login = _interopRequireDefault(require("./login"));

var _signup = _interopRequireDefault(require("./signup"));

var _user = _interopRequireDefault(require("../../../models/user"));

var _default = function _default(passport) {
  passport.serializeUser(function (user, done) {
    // console.log('serializing user: ');
    done(null, user._id);
  });
  passport.deserializeUser(function (id, done) {
    _user["default"].findById(id, function (err, user) {
      // console.log('deserializing user:', user);
      done(err, user);
    });
  });
  (0, _login["default"])(passport);
  (0, _signup["default"])(passport);
};

exports["default"] = _default;