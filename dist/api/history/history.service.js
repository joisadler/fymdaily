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

// Create
function create(_x) {
  return _create.apply(this, arguments);
} // Read


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
} // Update (update user info)


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
} // router.post('/info', isAuthenticated, async (req, res) => {
//   const id = req.user._id;
//   const { today } = req.query;
//   const info = req.body;
//   await HistoryEntry
//     .findOrCreate({ userId: id, date: today }, (error, entry) => {
//       if (error) throw error;
//       entry.info = info;
//       entry.save();
//     });
//   await User.findOneAndUpdate({ _id: id }, info);
//   res.status(204);
//   res.end();
// });
// List


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
            console.log('ENTRY:', entry);
            return _context4.abrupt("return", entry);

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            console.log('ERROR: while updating info');
            throw _context4.t0;

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return _updateInfo.apply(this, arguments);
}

function query(_x10) {
  return _query.apply(this, arguments);
}

function _query() {
  _query = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(userId) {
    var entries;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _historyEntry["default"].find({
              userId: userId
            });

          case 3:
            entries = _context5.sent;
            return _context5.abrupt("return", entries);

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log("ERROR: while finding entries of user ".concat(userId));

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return _query.apply(this, arguments);
}

var _default = {
  create: create,
  getById: getById,
  addFood: addFood,
  updateInfo: updateInfo,
  // remove,
  query: query
};
exports["default"] = _default;