"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../../models/user"));

// import { getCollection } from '../../services/db.service';
// import { query as _query } from '../review/review.service';
// import { ObjectId } from 'mongodb';
// function _buildCriteria(filterBy) {
//   const criteria = {};
//   if (filterBy.txt) {
//     criteria.username = filterBy.txt;
//   }
//   if (filterBy.minBalance) {
//     criteria.balance = { $gte: +filterBy.minBalance };
//   }
//   return criteria;
// }
// async function query(filterBy = {}) {
//   const criteria = _buildCriteria(filterBy);
//   const collection = await getCollection('user');
//   try {
//     const users = await collection.find(criteria).toArray();
//     // users.forEach(user => delete user.password);
//     return users;
//   } catch (err) {
//     console.log('ERROR: cannot find users');
//     throw err;
//   }
// }
function query() {
  return _query.apply(this, arguments);
} // async function getById(userId) {
//   const collection = await getCollection('user');
//   try {
//     const user = await collection.findOne({ _id: ObjectId(userId) });
//     delete user.password;
//     user.givenReviews = await _query({ byUserId: ObjectId(user._id) });
//     user.givenReviews = user.givenReviews.map((review) => {
//       delete review.byUser;
//       return review;
//     });
//     return user;
//   } catch (err) {
//     console.log(`ERROR: while finding user ${userId}`);
//     throw err;
//   }
// }


function _query() {
  _query = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var filterBy,
        users,
        usersArr,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            filterBy = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
            _context.prev = 1;
            _context.next = 4;
            return _user["default"].find(filterBy);

          case 4:
            users = _context.sent;
            usersArr = [];
            users.forEach(function (user) {
              user = user.toObject();
              delete user.password;
              usersArr.push(user);
            });
            return _context.abrupt("return", usersArr);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            console.log('ERROR: cannot find users');
            throw _context.t0;

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));
  return _query.apply(this, arguments);
}

function getById(_x) {
  return _getById.apply(this, arguments);
} // async function getByEmail(email) {
//   const collection = await getCollection('user');
//   try {
//     const user = await collection.findOne({ email });
//     return user;
//   } catch (err) {
//     console.log(`ERROR: while finding user ${email}`);
//     throw err;
//   }
// }


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

function getByEmail(_x2) {
  return _getByEmail.apply(this, arguments);
} // async function remove(userId) {
//   const collection = await getCollection('user');
//   try {
//     await collection.deleteOne({ _id: ObjectId(userId) });
//   } catch (err) {
//     console.log(`ERROR: cannot remove user ${userId}`);
//     throw err;
//   }
// }


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

function remove(_x3) {
  return _remove.apply(this, arguments);
} // async function update(user) {
//   const collection = await getCollection('user');
//   user._id = ObjectId(user._id);
//   try {
//     await collection.updateOne({ _id: user._id }, { $set: user });
//     return user;
//   } catch (err) {
//     console.log(`ERROR: cannot update user ${user._id}`);
//     throw err;
//   }
// }


function _remove() {
  _remove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(userId) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _user["default"].deleteOne({
              _id: userId
            });

          case 3:
            _context4.next = 9;
            break;

          case 5:
            _context4.prev = 5;
            _context4.t0 = _context4["catch"](0);
            console.log("ERROR: cannot remove user ".concat(userId));
            throw _context4.t0;

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 5]]);
  }));
  return _remove.apply(this, arguments);
}

function update(_x4) {
  return _update.apply(this, arguments);
} // async function add(user) {
//   const collection = await getCollection('user');
//   try {
//     await collection.insertOne(user);
//     return user;
//   } catch (err) {
//     console.log('ERROR: cannot insert user');
//     throw err;
//   }
// }


function _update() {
  _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(user) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _user["default"].updateOne({
              _id: user._id
            }, {
              $set: user
            });

          case 3:
            return _context5.abrupt("return", user);

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            console.log("ERROR: cannot update user ".concat(user._id));
            throw _context5.t0;

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 6]]);
  }));
  return _update.apply(this, arguments);
}

function add(_x5) {
  return _add.apply(this, arguments);
}

function _add() {
  _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(user) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _user["default"].create(user);

          case 3:
            return _context6.abrupt("return", user);

          case 6:
            _context6.prev = 6;
            _context6.t0 = _context6["catch"](0);
            console.log('ERROR: cannot insert user');
            throw _context6.t0;

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 6]]);
  }));
  return _add.apply(this, arguments);
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