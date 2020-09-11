"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var router = _express["default"].Router(); // eslint-disable-next-line consistent-return


var isAuthenticated = function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
};

var _default = function _default() {
  router.get('/', isAuthenticated, function (req, res) {
    res.json(req.user);
  });
  return router;
};

exports["default"] = _default;