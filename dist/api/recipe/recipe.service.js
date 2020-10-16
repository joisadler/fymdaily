"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _recipe = _interopRequireDefault(require("../../models/recipe"));

// Create
function add(_x) {
  return _add.apply(this, arguments);
} // Read


function _add() {
  _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(recipe) {
    var name, createdBy, calories, proteins, fats, carbs, ingredients, newRecipe;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            name = recipe.name.trim();
            createdBy = recipe.createdBy, calories = recipe.calories, proteins = recipe.proteins, fats = recipe.fats, carbs = recipe.carbs, ingredients = recipe.ingredients;
            _context.next = 5;
            return _recipe["default"].findOrCreate({
              createdBy: createdBy,
              name: name,
              calories: calories,
              proteins: proteins,
              fats: fats,
              carbs: carbs,
              ingredients: ingredients
            });

          case 5:
            newRecipe = _context.sent.doc;
            return _context.abrupt("return", newRecipe);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));
  return _add.apply(this, arguments);
}

function getById(_x2) {
  return _getById.apply(this, arguments);
} // List


function _getById() {
  _getById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_id) {
    var recipe;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _recipe["default"].findById(_id);

          case 3:
            recipe = _context2.sent;
            return _context2.abrupt("return", recipe);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log("ERROR: while finding recipe with id:".concat(_id));
            throw _context2.t0;

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getById.apply(this, arguments);
}

function query(_x3) {
  return _query.apply(this, arguments);
} // Update


function _query() {
  _query = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(createdBy) {
    var name,
        queryParams,
        start,
        recipes,
        _args3 = arguments;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            name = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : '';
            _context3.prev = 1;
            queryParams = {
              createdBy: createdBy,
              name: new RegExp("".concat(name.trim()), 'i')
            };
            start = new Date();
            _context3.next = 6;
            return _recipe["default"].find(queryParams);

          case 6:
            recipes = _context3.sent;
            // eslint-disable-next-line max-len
            console.log('Request to MongoDB for recipes took:', new Date() - start, 'ms');

            if (!(name === '')) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", (0, _toConsumableArray2["default"])(recipes));

          case 10:
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            console.log('ERROR: cannot find recipe');
            throw _context3.t0;

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 12]]);
  }));
  return _query.apply(this, arguments);
}

function update(_x4) {
  return _update.apply(this, arguments);
} // Delete


function _update() {
  _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(recipe) {
    var name, _id, ingredients, calories, proteins, fats, carbs;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            name = recipe.name.trim();
            _id = recipe._id, ingredients = recipe.ingredients, calories = recipe.calories, proteins = recipe.proteins, fats = recipe.fats, carbs = recipe.carbs;
            _context4.prev = 2;
            _context4.next = 5;
            return _recipe["default"].findByIdAndUpdate({
              _id: _id
            }, {
              name: name,
              ingredients: ingredients,
              calories: calories,
              proteins: proteins,
              fats: fats,
              carbs: carbs
            });

          case 5:
            return _context4.abrupt("return", recipe);

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](2);
            console.error(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 8]]);
  }));
  return _update.apply(this, arguments);
}

function remove(_x5) {
  return _remove.apply(this, arguments);
}

function _remove() {
  _remove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _recipe["default"].findByIdAndRemove(id);

          case 3:
            _context5.next = 8;
            break;

          case 5:
            _context5.prev = 5;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 5]]);
  }));
  return _remove.apply(this, arguments);
}

var _default = {
  add: add,
  getById: getById,
  query: query,
  update: update,
  remove: remove
};
exports["default"] = _default;