"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _passportLocal = _interopRequireDefault(require("passport-local"));

var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));

var _user = _interopRequireDefault(require("../../../models/user"));

var LocalStrategy = _passportLocal["default"].Strategy;

var isValidPassword = function isValidPassword(user, password) {
  return _bcryptNodejs["default"].compareSync(password, user.password);
};

var _default = function _default(passport) {
  passport.use('login', new LocalStrategy({
    passReqToCallback: true,
    usernameField: 'usernameOrEmail'
  }, function (req, usernameOrEmail, password, done) {
    // console.log(usernameOrEmail, password)
    _user["default"].findOne({
      email: usernameOrEmail
    }, function (error, user) {
      if (error) throw error;

      if (!user) {
        _user["default"].findOne({
          username: usernameOrEmail
        }, function (err, usr) {
          if (err) throw err;

          if (!usr) {
            return done(null, false, {
              user: null,
              message: 'User not found!'
            });
          }

          if (!isValidPassword(usr, password)) {
            return done(null, false, {
              user: null,
              message: 'Invalid Password!'
            });
          }

          return done(null, usr);
        });
      } else if (!isValidPassword(user, password)) {
        return done(null, false, {
          user: null,
          message: 'Invalid Password!'
        });
      } else return done(null, {
        user: user
      });

      return null;
    });
  }));
};

exports["default"] = _default;