"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _historyEntry = _interopRequireDefault(require("../models/history-entry"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router(); // eslint-disable-next-line consistent-return


var isAuthenticated = function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
};

var _default = function _default() {
  // eslint-disable-next-line no-unused-vars
  router.get('/', function (req, res) {
    var id = req.user._id;
    var today = req.query.today;

    _historyEntry["default"].findOrCreate({
      userId: id,
      date: today
    }, function (error, entry) {
      if (error) throw error;
      res.send(entry);
      res.end();
    });
  });
  router.post('/', isAuthenticated, function (req, res) {
    var id = req.user._id;
    var today = req.query.today;
    var newProduct = req.body;

    _historyEntry["default"].findOrCreate({
      userId: id,
      date: today
    }, function (error, entry) {
      if (error) throw error;
      entry.products.push(newProduct);
      entry.save();
      res.end();
    });
  });
  router.post('/info', isAuthenticated, /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var id, today, info;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = req.user._id;
              today = req.query.today;
              info = req.body;
              _context.next = 5;
              return _historyEntry["default"].findOrCreate({
                userId: id,
                date: today
              }, function (error, entry) {
                if (error) throw error;
                entry.info = info;
                entry.save();
              });

            case 5:
              _context.next = 7;
              return _user["default"].findOneAndUpdate({
                _id: id
              }, info);

            case 7:
              res.status(204);
              res.end();

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  router.put('/', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var id, today, position, weight, entry, products, updatedProducts;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = req.user._id;
              today = req.query.today;
              position = Number(req.query.position);
              weight = Number(req.query.weight);
              _context2.next = 6;
              return _historyEntry["default"].findOne({
                userId: id,
                date: today
              });

            case 6:
              entry = _context2.sent;
              products = entry.products;
              updatedProducts = products.slice(0);
              updatedProducts.forEach(function (p, i) {
                if (i === position) {
                  p.weight = weight;
                }
              });
              _context2.next = 12;
              return _historyEntry["default"].findOneAndUpdate({
                userId: id,
                date: today
              }, {
                products: updatedProducts
              });

            case 12:
              res.status(204);
              res.end();

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  router["delete"]('/', /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
      var id, today, position, entry, products, updatedProducts;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = req.user._id;
              today = req.query.today;
              position = Number(req.query.position);
              _context3.next = 5;
              return _historyEntry["default"].findOne({
                userId: id,
                date: today
              });

            case 5:
              entry = _context3.sent;
              products = entry.products;
              updatedProducts = products.slice(0);
              updatedProducts.forEach(function (p, i, arr) {
                if (i === position) arr.splice(i, 1);
              });
              _context3.next = 11;
              return _historyEntry["default"].findOneAndUpdate({
                userId: id,
                date: today
              }, {
                products: updatedProducts
              });

            case 11:
              res.status(204);
              res.end();

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
  return router;
};

exports["default"] = _default;