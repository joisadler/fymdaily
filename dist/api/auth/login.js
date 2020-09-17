"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var router = _express["default"].Router();

var _default = function _default(passport) {
  router.post('/', function (req, res, next) {
    console.log('req.body: ', req.body);
    passport.authenticate('login', function (err, user, info) {
      if (err) return next(err);
      if (info) return res.send(info);
      req.logIn(user, function (error) {
        if (error) return next(error);
        return res.send({
          user: user,
          message: 'Successfully Authenticated!'
        });
      });
    })(req, res, next);
  });
  return router;
};

exports["default"] = _default;