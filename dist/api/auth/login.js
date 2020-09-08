"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var _default = function _default(passport) {
  router.post('/', function (req, res, next) {
    passport.authenticate('login', function (err, user, info) {
      if (err) return next(err);
      if (info) return res.send(info);
      req.logIn(user, function (error) {
        if (error) return next(error); // return res.send(user);

        return res.send({
          // user,
          message: 'Successfully Authenticated!'
        });
      });
    })(req, res, next);
  });
  return router;
};

exports["default"] = _default;