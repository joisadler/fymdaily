"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _util = require("util");

var _fatsecret = _interopRequireDefault(require("fatsecret"));

/* eslint-disable no-restricted-globals */
var router = _express["default"].Router();

var _process$env = process.env,
    FATSECRET_KEY = _process$env.FATSECRET_KEY,
    FATSECRET_SECRET = _process$env.FATSECRET_SECRET;
var API = new _fatsecret["default"](FATSECRET_KEY, FATSECRET_SECRET);

var searchFoods = function searchFoods(params) {
  return API.method('foods.search', params);
};

var getFood = function getFood(params) {
  return API.method('food.get', params);
};

var _default = function _default() {
  router.get('/', /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _req$query, search_expression, language, region, results, response, key;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              // eslint-disable-next-line camelcase
              _req$query = req.query, search_expression = _req$query.search_expression, language = _req$query.language, region = _req$query.region;
              _context2.next = 4;
              return searchFoods({
                search_expression: search_expression,
                language: language,
                region: region,
                max_results: 10
              });

            case 4:
              results = _context2.sent;
              response = {};

              if (!results.foods.food) {
                res.json(response);
              } else {
                key = 0;
                results.foods.food.map( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(food, i) {
                    var product, nutriments, name, brand, calories, proteins, fats, carbs;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return getFood({
                              food_id: food.food_id
                            });

                          case 2:
                            product = _context.sent;
                            nutriments = (0, _util.isArray)(product.food.servings.serving) ? product.food.servings.serving[0] : product.food.servings.serving;
                            name = product.food.food_name;
                            brand = product.food.brand_name || '';
                            calories = nutriments.calories * 100 / nutriments.metric_serving_amount;
                            proteins = nutriments.protein * 100 / nutriments.metric_serving_amount;
                            fats = nutriments.fat * 100 / nutriments.metric_serving_amount;
                            carbs = nutriments.sugar * 100 / nutriments.metric_serving_amount;

                            if (nutriments.metric_serving_unit === 'oz') {
                              calories /= 29.574;
                              proteins /= 29.574;
                              fats /= 29.574;
                              carbs /= 29.574;
                            }

                            if (!isNaN(calories) && !isNaN(proteins) && !isNaN(fats) && !isNaN(carbs)) {
                              response[key] = {
                                name: name,
                                brand: brand,
                                calories: calories,
                                proteins: proteins,
                                fats: fats,
                                carbs: carbs
                              };
                              key += 1;
                            }

                            if (i === results.foods.food.length - 1) {
                              res.json(response);
                            }

                          case 13:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x3, _x4) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              }

              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  return router;
};

exports["default"] = _default;