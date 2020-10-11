"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _recipe = require("./recipe.controller");

var router = _express["default"].Router();

var isAuthenticated = function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
};

router.get('/', _recipe.getRecipes);
router.get('/:id', _recipe.getRecipe);
router.post('/', _recipe.addRecipe);
router.put('/', isAuthenticated, _recipe.updateRecipe);
router["delete"]('/:id', isAuthenticated, _recipe.deleteRecipe);
module.exports = router;