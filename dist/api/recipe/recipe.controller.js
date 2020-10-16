"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _recipe = _interopRequireDefault(require("./recipe.service"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Create
function addRecipe(_x, _x2) {
  return _addRecipe.apply(this, arguments);
} // Read


function _addRecipe() {
  _addRecipe = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var createdBy, recipe, newRecipe;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            createdBy = req.user._id;
            recipe = _objectSpread({
              createdBy: createdBy
            }, req.body);
            _context.next = 4;
            return _recipe["default"].add(recipe);

          case 4:
            newRecipe = _context.sent;
            res.send(newRecipe);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _addRecipe.apply(this, arguments);
}

function getRecipe(_x3, _x4) {
  return _getRecipe.apply(this, arguments);
} // List


function _getRecipe() {
  _getRecipe = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var recipe;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _recipe["default"].getById(req.params.id);

          case 2:
            recipe = _context2.sent;
            res.send(recipe);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getRecipe.apply(this, arguments);
}

function getRecipes(_x5, _x6) {
  return _getRecipes.apply(this, arguments);
} // Update


function _getRecipes() {
  _getRecipes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var createdBy, recipes;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            createdBy = req.user._id;
            _context3.next = 3;
            return _recipe["default"].query(createdBy, req.query.name);

          case 3:
            recipes = _context3.sent;
            res.send(recipes);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getRecipes.apply(this, arguments);
}

function updateRecipe(_x7, _x8) {
  return _updateRecipe.apply(this, arguments);
} // Delete


function _updateRecipe() {
  _updateRecipe = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var recipe, updatedRecipe;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            recipe = req.body;
            _context4.next = 3;
            return _recipe["default"].update(recipe);

          case 3:
            updatedRecipe = _context4.sent;
            res.send(updatedRecipe);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateRecipe.apply(this, arguments);
}

function deleteRecipe(_x9, _x10) {
  return _deleteRecipe.apply(this, arguments);
}

function _deleteRecipe() {
  _deleteRecipe = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _recipe["default"].remove(req.params.id);

          case 2:
            return _context5.abrupt("return", res.send({
              message: 'Recipe has been successfully deleted!'
            }));

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _deleteRecipe.apply(this, arguments);
}

module.exports = {
  getRecipe: getRecipe,
  getRecipes: getRecipes,
  addRecipe: addRecipe,
  updateRecipe: updateRecipe,
  deleteRecipe: deleteRecipe
};