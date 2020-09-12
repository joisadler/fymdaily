"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _food = require("./food.controller");

var router = _express["default"].Router();

var isAuthenticated = function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
};

router.get('/', _food.getFoods);
router.get('/:id', _food.getFood);
router.post('/', _food.addFood);
router.put('/', isAuthenticated, _food.updateFood);
router["delete"]('/:id', isAuthenticated, _food.deleteFood);
module.exports = router;