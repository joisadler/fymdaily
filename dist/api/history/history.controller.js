"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _history = _interopRequireDefault(require("./history.service"));

function createHistoryEntry(_x, _x2) {
  return _createHistoryEntry.apply(this, arguments);
}

function _createHistoryEntry() {
  _createHistoryEntry = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var entry;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _history["default"].create(req.body);

          case 2:
            entry = _context.sent;
            res.send(entry);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createHistoryEntry.apply(this, arguments);
}

function getHistoryEntry(_x3, _x4) {
  return _getHistoryEntry.apply(this, arguments);
}

function _getHistoryEntry() {
  _getHistoryEntry = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var entry;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _history["default"].getById(req.params.id, req.body.date);

          case 2:
            entry = _context2.sent;
            res.send(entry);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getHistoryEntry.apply(this, arguments);
}

function getHistoryEntries(_x5, _x6) {
  return _getHistoryEntries.apply(this, arguments);
}

function _getHistoryEntries() {
  _getHistoryEntries = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var createdBy, entries;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            createdBy = req.user._id;
            _context3.next = 3;
            return _history["default"].query(createdBy);

          case 3:
            entries = _context3.sent;
            res.send(entries);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getHistoryEntries.apply(this, arguments);
}

function addEatenFood(_x7, _x8) {
  return _addEatenFood.apply(this, arguments);
}

function _addEatenFood() {
  _addEatenFood = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var entry;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _history["default"].addFood(req.user._id, req.body.date, req.body.food);

          case 2:
            entry = _context4.sent;
            res.send(entry);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _addEatenFood.apply(this, arguments);
}

function updateUserInfo(_x9, _x10) {
  return _updateUserInfo.apply(this, arguments);
}

function _updateUserInfo() {
  _updateUserInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var entry;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _history["default"].updateInfo(req.user._id, req.body.date, req.body.info);

          case 2:
            entry = _context5.sent;
            res.send(entry);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updateUserInfo.apply(this, arguments);
}

function updateEatenFood(_x11, _x12) {
  return _updateEatenFood.apply(this, arguments);
}

function _updateEatenFood() {
  _updateEatenFood = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var entry;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _history["default"].updateFood(req.user._id, req.body.date, req.body.food);

          case 2:
            entry = _context6.sent;
            res.send(entry);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _updateEatenFood.apply(this, arguments);
}

function deleteEatenFood(_x13, _x14) {
  return _deleteEatenFood.apply(this, arguments);
}

function _deleteEatenFood() {
  _deleteEatenFood = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var entry;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _history["default"].deleteFood(req.user._id, req.body.date, req.body.food);

          case 2:
            entry = _context7.sent;
            res.send(entry);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _deleteEatenFood.apply(this, arguments);
}

module.exports = {
  createHistoryEntry: createHistoryEntry,
  getHistoryEntry: getHistoryEntry,
  getHistoryEntries: getHistoryEntries,
  addEatenFood: addEatenFood,
  updateUserInfo: updateUserInfo,
  updateEatenFood: updateEatenFood,
  deleteEatenFood: deleteEatenFood
};