"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _default = _mongoose["default"].model('User', {
  username: {
    type: String,
    unique: true
  },
  password: String,
  email: {
    type: String,
    unique: true
  },
  bodyWeight: Number,
  height: Number,
  gender: String,
  waistCircumference: Number,
  neckCircumference: Number,
  hipCircumference: Number,
  physicalActivityLevel: String,
  goal: String,
  language: {
    type: String,
    "default": 'en'
  },
  region: {
    type: String,
    "default": 'US'
  }
});

exports["default"] = _default;