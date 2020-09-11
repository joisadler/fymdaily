"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("./user.service"));

function getUser(_x, _x2) {
  return _getUser.apply(this, arguments);
}

function _getUser() {
  _getUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _user["default"].getById(req.params.id);

          case 2:
            user = _context.sent;
            res.send(user);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getUser.apply(this, arguments);
}

function getUsers(_x3, _x4) {
  return _getUsers.apply(this, arguments);
}

function _getUsers() {
  _getUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var users;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('req.query:', req.query);
            _context2.next = 3;
            return _user["default"].query(req.query);

          case 3:
            users = _context2.sent;
            res.send(users);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getUsers.apply(this, arguments);
}

function deleteUser(_x5, _x6) {
  return _deleteUser.apply(this, arguments);
}

function _deleteUser() {
  _deleteUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _user["default"].remove(req.params.id);

          case 2:
            return _context3.abrupt("return", res.send({
              message: 'Account has been successfully deleted!'
            }));

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _deleteUser.apply(this, arguments);
}

function updateUser(_x7, _x8) {
  return _updateUser.apply(this, arguments);
}

function _updateUser() {
  _updateUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var user;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            user = req.body;
            _context4.next = 3;
            return _user["default"].update(user);

          case 3:
            res.send(user);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateUser.apply(this, arguments);
}

function addUser(_x9, _x10) {
  return _addUser.apply(this, arguments);
}

function _addUser() {
  _addUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var user;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            console.log(req.body);
            user = req.body;
            _context5.next = 4;
            return _user["default"].add(user);

          case 4:
            res.send(user);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _addUser.apply(this, arguments);
}

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  deleteUser: deleteUser,
  updateUser: updateUser,
  addUser: addUser
};