"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _food = _interopRequireDefault(require("../../models/food"));

var _fatsecret = _interopRequireDefault(require("../../services/fatsecret.service"));

// Create
function add(_x) {
  return _add.apply(this, arguments);
} // Read


function _add() {
  _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(food) {
    var name, brand, createdBy, calories, proteins, fats, carbs, newFood;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            name = food.name.trim();
            brand = food.brand.trim();
            createdBy = food.createdBy, calories = food.calories, proteins = food.proteins, fats = food.fats, carbs = food.carbs;
            _context.next = 6;
            return _food["default"].findOrCreate({
              createdBy: createdBy,
              name: name,
              brand: brand,
              calories: calories,
              proteins: proteins,
              fats: fats,
              carbs: carbs
            });

          case 6:
            newFood = _context.sent.doc;
            return _context.abrupt("return", newFood);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));
  return _add.apply(this, arguments);
}

function getById(_x2) {
  return _getById.apply(this, arguments);
} // List


function _getById() {
  _getById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_id) {
    var food;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _food["default"].findById(_id);

          case 3:
            food = _context2.sent;
            return _context2.abrupt("return", food);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log("ERROR: while finding food with id:".concat(_id));
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
        custom,
        queryParams,
        start,
        foodsCreatedByUser,
        regex,
        nameIsNotValidForFatsecretApi,
        foodsFromFatSecretAPI,
        foods,
        _args3 = arguments;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            name = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : '';
            custom = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : false;
            _context3.prev = 2;
            queryParams = {
              createdBy: createdBy,
              name: new RegExp("".concat(name.trim()), 'i')
            };
            start = new Date();
            _context3.next = 7;
            return _food["default"].find(queryParams);

          case 7:
            foodsCreatedByUser = _context3.sent;
            console.log('Request to MongoDB for foods took:', new Date() - start, 'ms');
            regex = /^[A-Za-z0-9]+$/; // name contains only english letters or numbers

            nameIsNotValidForFatsecretApi = !regex.test(name);

            if (!(name === '')) {
              _context3.next = 13;
              break;
            }

            return _context3.abrupt("return", []);

          case 13:
            if (!(custom || name.length < 2 || nameIsNotValidForFatsecretApi)) {
              _context3.next = 15;
              break;
            }

            return _context3.abrupt("return", (0, _toConsumableArray2["default"])(foodsCreatedByUser));

          case 15:
            _context3.next = 17;
            return _fatsecret["default"].query(name);

          case 17:
            foodsFromFatSecretAPI = _context3.sent;
            foods = [].concat((0, _toConsumableArray2["default"])(foodsCreatedByUser), (0, _toConsumableArray2["default"])(foodsFromFatSecretAPI));
            return _context3.abrupt("return", foods);

          case 22:
            _context3.prev = 22;
            _context3.t0 = _context3["catch"](2);
            console.log('ERROR: cannot find food');
            throw _context3.t0;

          case 26:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 22]]);
  }));
  return _query.apply(this, arguments);
}

function update(_x4) {
  return _update.apply(this, arguments);
} // Delete


function _update() {
  _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(food) {
    var name, brand, _id, calories, proteins, fats, carbs;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            name = food.name.trim();
            brand = food.brand.trim();
            _id = food._id, calories = food.calories, proteins = food.proteins, fats = food.fats, carbs = food.carbs;
            _context4.prev = 3;
            _context4.next = 6;
            return _food["default"].findByIdAndUpdate({
              _id: _id
            }, {
              name: name,
              brand: brand,
              calories: calories,
              proteins: proteins,
              fats: fats,
              carbs: carbs
            });

          case 6:
            return _context4.abrupt("return", food);

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](3);
            console.error(_context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 9]]);
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
            return _food["default"].findByIdAndRemove(id);

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