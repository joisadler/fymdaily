"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var findOrCreate = require('mongoose-findorcreate');

var RecipeSchema = new _mongoose["default"].Schema({
  createdBy: String,
  name: String,
  calories: Number,
  proteins: Number,
  fats: Number,
  carbs: Number,
  ingredients: [{
    name: String,
    brand: String,
    weight: Number,
    calories: Number,
    proteins: Number,
    fats: Number,
    carbs: Number
  }]
});
RecipeSchema.plugin(findOrCreate);

var _default = _mongoose["default"].model('Recipe', RecipeSchema);

exports["default"] = _default;