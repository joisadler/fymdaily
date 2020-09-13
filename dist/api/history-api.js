"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _historyEntry = _interopRequireDefault(require("../models/history-entry"));

var _user = _interopRequireDefault(require("../models/user"));

/* eslint-disable no-param-reassign */

/* eslint-disable no-underscore-dangle */
var router = _express["default"].Router(); // eslint-disable-next-line consistent-return


var isAuthenticated = function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
};

var _default = function _default() {
  // eslint-disable-next-line no-unused-vars
  // router.get('/', (req, res) => {
  //   const id = req.user._id;
  //   const { today } = req.query;
  //   HistoryEntry.findOrCreate({ userId: id, date: today }, (error, entry) => {
  //     if (error) throw error;
  //     res.send(entry);
  //     res.end();
  //   });
  // });
  // router.post('/', isAuthenticated, (req, res) => {
  //   const id = req.user._id;
  //   const { today } = req.query;
  //   const newProduct = req.body;
  //   HistoryEntry.findOrCreate({ userId: id, date: today }, (error, entry) => {
  //     if (error) throw error;
  //     entry.products.push(newProduct);
  //     entry.save();
  //     res.end();
  //   });
  // });
  // router.post('/info', isAuthenticated, async (req, res) => {
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
  // // update eaten food
  // router.put('/', async (req, res) => {
  //   const id = req.user._id;
  //   const { today } = req.query;
  //   const position = Number(req.query.position);
  //   const weight = Number(req.query.weight);
  //   const entry = await HistoryEntry.findOne({ userId: id, date: today });
  //   const { products } = entry;
  //   const updatedProducts = products.slice(0);
  //   updatedProducts.forEach((p, i) => {
  //     if (i === position) {
  //       p.weight = weight;
  //     }
  //   });
  //   await HistoryEntry.findOneAndUpdate({
  //     userId: id,
  //     date: today
  //   }, { products: updatedProducts });
  //   res.status(204);
  //   res.end();
  // });
  // delete eaten food
  router["delete"]('/', /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var id, today, position, entry, products, updatedProducts;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = req.user._id;
              today = req.query.today;
              position = Number(req.query.position);
              _context.next = 5;
              return _historyEntry["default"].findOne({
                userId: id,
                date: today
              });

            case 5:
              entry = _context.sent;
              products = entry.products;
              updatedProducts = products.slice(0);
              updatedProducts.forEach(function (p, i, arr) {
                if (i === position) arr.splice(i, 1);
              });
              _context.next = 11;
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
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  return router;
};

exports["default"] = _default;