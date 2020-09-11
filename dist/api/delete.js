"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../models/user"));

var router = _express["default"].Router(); // eslint-disable-next-line consistent-return


var isAuthenticated = function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
};

var _default = function _default() {
  router.get('/:id', isAuthenticated, function (req, res) {
    console.log("delete user with id: ".concat(req.params.id));

    _user["default"].findByIdAndRemove(req.params.id, function (err) {
      if (err) res.send(err);
      req.flash('message', 'Account has been successfully deleted!');
      res.redirect('/');
    });
  });
  return router;
};

exports["default"] = _default;