"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _user = require("./user.controller");

var router = _express["default"].Router();

var isAuthenticated = function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
};

router.get('/', _user.getUsers);
router.get('/:id', _user.getUser);
router.post('/', _user.addUser);
router.put('/:id', isAuthenticated, _user.updateUser);
router["delete"]('/:id', isAuthenticated, _user.deleteUser);
module.exports = router;