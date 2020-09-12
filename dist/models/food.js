"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var findOrCreate = require('mongoose-findorcreate');

var FoodSchema = new _mongoose["default"].Schema({
  createdBy: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: false
  },
  calories: {
    type: String,
    required: true
  },
  proteins: {
    type: String,
    required: true
  },
  fats: {
    type: String,
    required: true
  },
  carbs: {
    type: String,
    required: true
  }
});
FoodSchema.plugin(findOrCreate);

var _default = _mongoose["default"].model('Food', FoodSchema);

exports["default"] = _default;