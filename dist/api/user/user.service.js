"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../../models/user"));

// Create
function add(_x) {
  return _add.apply(this, arguments);
} // Read


function _add() {
  _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(user) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _user["default"].create(user);

          case 3:
            return _context.abrupt("return", user);

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log('ERROR: cannot insert user');
            throw _context.t0;

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _add.apply(this, arguments);
}

function getById(_x2) {
  return _getById.apply(this, arguments);
} // Read


function _getById() {
  _getById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userId) {
    var user, userObj;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _user["default"].findById(userId);

          case 3:
            user = _context2.sent;
            userObj = user.toObject();
            delete userObj.password;
            return _context2.abrupt("return", userObj);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log("ERROR: while finding user ".concat(userId));
            throw _context2.t0;

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return _getById.apply(this, arguments);
}

function getByEmail(_x3) {
  return _getByEmail.apply(this, arguments);
} // Update


function _getByEmail() {
  _getByEmail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(email) {
    var user;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _user["default"].findOne({
              email: email
            });

          case 3:
            user = _context3.sent;
            return _context3.abrupt("return", user);

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log("ERROR: while finding user ".concat(email));
            throw _context3.t0;

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _getByEmail.apply(this, arguments);
}

function update(_x4) {
  return _update.apply(this, arguments);
} // Delete


function _update() {
  _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(user) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _user["default"].updateOne({
              _id: user._id
            }, {
              $set: user
            });

          case 3:
            return _context4.abrupt("return", user);

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            console.log("ERROR: cannot update user ".concat(user._id));
            throw _context4.t0;

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));
  return _update.apply(this, arguments);
}

function remove(_x5) {
  return _remove.apply(this, arguments);
} // List


function _remove() {
  _remove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(userId) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _user["default"].deleteOne({
              _id: userId
            });

          case 3:
            _context5.next = 9;
            break;

          case 5:
            _context5.prev = 5;
            _context5.t0 = _context5["catch"](0);
            console.log("ERROR: cannot remove user ".concat(userId));
            throw _context5.t0;

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 5]]);
  }));
  return _remove.apply(this, arguments);
}

function query() {
  return _query.apply(this, arguments);
}

function _query() {
  _query = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
    var filterBy,
        users,
        usersArr,
        _args6 = arguments;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            filterBy = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
            _context6.prev = 1;
            _context6.next = 4;
            return _user["default"].find(filterBy);

          case 4:
            users = _context6.sent;
            usersArr = [];
            users.forEach(function (user) {
              user = user.toObject();
              delete user.password;
              usersArr.push(user);
            });
            return _context6.abrupt("return", usersArr);

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](1);
            console.log('ERROR: cannot find users');
            throw _context6.t0;

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 10]]);
  }));
  return _query.apply(this, arguments);
}

var _default = {
  query: query,
  getById: getById,
  getByEmail: getByEmail,
  remove: remove,
  update: update,
  add: add
};
exports["default"] = _default;