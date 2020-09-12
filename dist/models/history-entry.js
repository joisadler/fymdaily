"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var findOrCreate = require('mongoose-findorcreate');

var HistoryEntrySchema = new _mongoose["default"].Schema({
  userId: String,
  date: String,
  eaten_foods: [{
    name: String,
    brand: String,
    weight: Number,
    calories: Number,
    proteins: Number,
    fats: Number,
    carbs: Number
  }],
  info: {
    _id: false,
    bodyWeight: Number,
    height: Number,
    gender: String,
    waistCircumference: Number,
    neckCircumference: Number,
    hipCircumference: Number,
    physicalActivityLevel: String,
    goal: String
  }
});
HistoryEntrySchema.plugin(findOrCreate);

var _default = _mongoose["default"].model('HistoryEntry', HistoryEntrySchema);

exports["default"] = _default;