"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var findOrCreate = require('mongoose-find-or-create');

var HistoryEntrySchema = new _mongoose["default"].Schema({
  userId: String,
  date: String,
  products: [{
    _id: false,
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