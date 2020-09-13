"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _historyEntry = _interopRequireDefault(require("../../models/history-entry"));

var _user = _interopRequireDefault(require("../../models/user"));

// Create history entry
function create(_x) {
  return _create.apply(this, arguments);
} // Read users history entry by date


function _create() {
  _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
    var entry;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _historyEntry["default"].create(params);

          case 3:
            entry = _context.sent;
            return _context.abrupt("return", entry);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log('ERROR: while creating entry');
            throw _context.t0;

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _create.apply(this, arguments);
}

function getById(_x2, _x3) {
  return _getById.apply(this, arguments);
} // Update (add eaten food)


function _getById() {
  _getById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userId, date) {
    var entry;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _historyEntry["default"].findOrCreate({
              userId: userId,
              date: date
            });

          case 3:
            entry = _context2.sent;
            return _context2.abrupt("return", entry.doc);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log('ERROR: while finding entry');
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

function addFood(_x4, _x5, _x6) {
  return _addFood.apply(this, arguments);
} // Update user info


function _addFood() {
  _addFood = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(userId, date, food) {
    var entry;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _historyEntry["default"].findOrCreate({
              userId: userId,
              date: date
            });

          case 3:
            entry = _context3.sent.doc;
            entry.eaten_foods.push(food);
            entry.save();
            return _context3.abrupt("return", entry);

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.log('ERROR: while adding eaten food');
            throw _context3.t0;

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return _addFood.apply(this, arguments);
}

function updateInfo(_x7, _x8, _x9) {
  return _updateInfo.apply(this, arguments);
} // Update eaten food


function _updateInfo() {
  _updateInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(userId, date, info) {
    var entry;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _historyEntry["default"].findOrCreate({
              userId: userId,
              date: date
            });

          case 3:
            entry = _context4.sent.doc;
            entry.info = info;
            entry.save();
            _context4.next = 8;
            return _user["default"].findOneAndUpdate({
              _id: userId
            }, info);

          case 8:
            return _context4.abrupt("return", entry);

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            console.log('ERROR: while updating info');
            throw _context4.t0;

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return _updateInfo.apply(this, arguments);
}

function updateFood(_x10, _x11, _x12) {
  return _updateFood.apply(this, arguments);
} // Delete eaten food


function _updateFood() {
  _updateFood = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(userId, date, food) {
    var weight, _id, entry, eaten_foods, updatedFoods;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            weight = food.weight, _id = food._id;
            _context5.next = 3;
            return _historyEntry["default"].findOne({
              userId: userId,
              date: date
            });

          case 3:
            entry = _context5.sent;
            eaten_foods = entry.eaten_foods;
            updatedFoods = eaten_foods.slice();
            updatedFoods.forEach(function (f) {
              if (String(f._id) === _id) {
                f.weight = weight;
              }
            });
            entry.eaten_foods = updatedFoods;
            entry.save();
            return _context5.abrupt("return", entry);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updateFood.apply(this, arguments);
}

function deleteFood(_x13, _x14, _x15) {
  return _deleteFood.apply(this, arguments);
} // List of all history entries of the user


function _deleteFood() {
  _deleteFood = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(userId, date, food) {
    var _id, entry, eaten_foods, updatedFoods;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _id = food._id;
            _context6.next = 3;
            return _historyEntry["default"].findOne({
              userId: userId,
              date: date
            });

          case 3:
            entry = _context6.sent;
            eaten_foods = entry.eaten_foods;
            updatedFoods = eaten_foods.slice();
            updatedFoods.forEach(function (f, i, arr) {
              if (String(f._id) === _id) {
                arr.splice(i, 1);
              }
            });
            entry.eaten_foods = updatedFoods;
            entry.save();
            return _context6.abrupt("return", entry);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _deleteFood.apply(this, arguments);
}

function query(_x16) {
  return _query.apply(this, arguments);
}

function _query() {
  _query = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(userId) {
    var entries;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _historyEntry["default"].find({
              userId: userId
            });

          case 3:
            entries = _context7.sent;
            return _context7.abrupt("return", entries);

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            console.log("ERROR: while finding entries of user ".concat(userId));

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));
  return _query.apply(this, arguments);
}

var _default = {
  create: create,
  getById: getById,
  addFood: addFood,
  updateInfo: updateInfo,
  updateFood: updateFood,
  deleteFood: deleteFood,
  query: query
};
exports["default"] = _default;