"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _food = _interopRequireDefault(require("./food.service"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Create
function addFood(_x, _x2) {
  return _addFood.apply(this, arguments);
} // Read


function _addFood() {
  _addFood = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var createdBy, food;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            createdBy = req.user._id;
            food = _objectSpread({
              createdBy: createdBy
            }, req.body);
            _context.next = 4;
            return _food["default"].add(food);

          case 4:
            res.send(food);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _addFood.apply(this, arguments);
}

function getFood(_x3, _x4) {
  return _getFood.apply(this, arguments);
} // List


function _getFood() {
  _getFood = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var food;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _food["default"].getById(req.params.id);

          case 2:
            food = _context2.sent;
            res.send(food);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getFood.apply(this, arguments);
}

function getFoods(_x5, _x6) {
  return _getFoods.apply(this, arguments);
} // Update


function _getFoods() {
  _getFoods = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var createdBy, foods;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            createdBy = req.user._id;
            _context3.next = 3;
            return _food["default"].query(createdBy, req.query.name);

          case 3:
            foods = _context3.sent;
            res.send(foods);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getFoods.apply(this, arguments);
}

function updateFood(_x7, _x8) {
  return _updateFood.apply(this, arguments);
} // Delete


function _updateFood() {
  _updateFood = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var food;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            food = req.body;
            _context4.next = 3;
            return _food["default"].update(food);

          case 3:
            res.send(food);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateFood.apply(this, arguments);
}

function deleteFood(_x9, _x10) {
  return _deleteFood.apply(this, arguments);
}

function _deleteFood() {
  _deleteFood = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _food["default"].remove(req.params.id);

          case 2:
            return _context5.abrupt("return", res.send({
              message: 'Food has been successfully deleted!'
            }));

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _deleteFood.apply(this, arguments);
}

module.exports = {
  getFood: getFood,
  getFoods: getFoods,
  addFood: addFood,
  updateFood: updateFood,
  deleteFood: deleteFood
};