"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _food = _interopRequireDefault(require("../models/food"));

/* eslint-disable no-param-reassign */

/* eslint-disable no-underscore-dangle */
var router = _express["default"].Router();

var _default = function _default() {
  router.get('/', /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var createdBy, foods;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              createdBy = req.user._id;
              _context.next = 4;
              return _food["default"].find({
                createdBy: createdBy
              });

            case 4:
              foods = _context.sent;
              res.set('Content-Type', 'application/json');
              res.send(foods);
              res.status(201);
              res.end();
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  router.post('/', /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var createdBy, name, brand, _req$query, calories, proteins, fats, carbs;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              createdBy = req.user._id;
              name = decodeURIComponent(req.query.name).trim();
              brand = decodeURIComponent(req.query.brand).trim();
              _req$query = req.query, calories = _req$query.calories, proteins = _req$query.proteins, fats = _req$query.fats, carbs = _req$query.carbs;
              _context2.next = 7;
              return _food["default"].findOrCreate({
                createdBy: createdBy,
                name: name,
                brand: brand,
                calories: calories,
                proteins: proteins,
                fats: fats,
                carbs: carbs
              });

            case 7:
              res.status(201);
              res.end();
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  router.put('/', /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var createdBy, _req$query2, calories, proteins, fats, carbs, position, name, brand, products, newProducts;

      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              createdBy = req.user._id;
              _req$query2 = req.query, calories = _req$query2.calories, proteins = _req$query2.proteins, fats = _req$query2.fats, carbs = _req$query2.carbs, position = _req$query2.position;
              name = decodeURIComponent(req.query.name);
              brand = decodeURIComponent(req.query.brand);
              _context4.prev = 4;
              _context4.next = 7;
              return _food["default"].find({
                createdBy: createdBy
              });

            case 7:
              products = _context4.sent;
              newProducts = products.slice(0);
              newProducts.forEach( /*#__PURE__*/function () {
                var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(product, i) {
                  return _regenerator["default"].wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          if (!(product === newProducts[position])) {
                            _context3.next = 3;
                            break;
                          }

                          _context3.next = 3;
                          return _food["default"].findOneAndUpdate({
                            name: product.name,
                            brand: product.brand
                          }, {
                            name: name,
                            brand: brand,
                            calories: calories,
                            proteins: proteins,
                            fats: fats,
                            carbs: carbs
                          });

                        case 3:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x7, _x8) {
                  return _ref4.apply(this, arguments);
                };
              }());
              res.status(204);
              res.end();
              _context4.next = 17;
              break;

            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](4);
              console.error(_context4.t0);

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[4, 14]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
  router["delete"]('/', /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var createdBy, name, brand;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              createdBy = req.user._id;
              name = decodeURIComponent(req.query.name);
              brand = decodeURIComponent(req.query.brand);
              _context5.prev = 3;
              _context5.next = 6;
              return _food["default"].findOneAndDelete({
                createdBy: createdBy,
                name: name,
                brand: brand
              });

            case 6:
              res.status(204);
              res.end();
              _context5.next = 13;
              break;

            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](3);
              console.error(_context5.t0);

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[3, 10]]);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
  return router;
};

exports["default"] = _default;