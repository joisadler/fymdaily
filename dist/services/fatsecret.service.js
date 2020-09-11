"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fatsecret = _interopRequireDefault(require("fatsecret"));

/* eslint-disable max-len */
// /* eslint-disable no-restricted-globals */
// import express from 'express';
// import { isArray } from 'util';
// import FatsecretAPI from 'fatsecret';
// const router = express.Router();
// const { FATSECRET_KEY, FATSECRET_SECRET } = process.env;
// const API = new FatsecretAPI(FATSECRET_KEY, FATSECRET_SECRET);
// const searchFoods = params => API.method('foods.search', params);
// const getFood = params => API.method('food.get', params);
// export default () => {
//   router.get('/', async (req, res) => {
//     try {
//     // eslint-disable-next-line camelcase
//       const { search_expression, language, region } = req.query;
//       const results = await searchFoods({
//         search_expression,
//         language,
//         region,
//         max_results: 10,
//       });
//       const response = {};
//       if (!results.foods.food) {
//         res.json(response);
//       } else {
//         let key = 0;
//         results.foods.food.map(async (food, i) => {
//           const product = await getFood({
//             food_id: food.food_id
//           });
//           const nutriments = Array.isArray(product.food.servings.serving)
//             ? product.food.servings.serving[0]
//             : product.food.servings.serving;
//           const name = product.food.food_name;
//           const brand = product.food.brand_name || '';
//           let calories = (nutriments.calories * 100)
//           / nutriments.metric_serving_amount;
//           let proteins = (nutriments.protein * 100)
//           / nutriments.metric_serving_amount;
//           let fats = (nutriments.fat * 100)
//           / nutriments.metric_serving_amount;
//           let carbs = (nutriments.sugar * 100)
//           / nutriments.metric_serving_amount;
//           if (nutriments.metric_serving_unit === 'oz') {
//             calories /= 29.574;
//             proteins /= 29.574;
//             fats /= 29.574;
//             carbs /= 29.574;
//           }
//           if (!isNaN(calories)
//           && !isNaN(proteins)
//           && !isNaN(fats)
//           && !isNaN(carbs)) {
//             response[key] = {
//               name,
//               brand,
//               calories,
//               proteins,
//               fats,
//               carbs
//             };
//             key += 1;
//           }
//           if (i === results.foods.food.length - 1) {
//             res.json(response);
//           }
//         });
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   });
//   return router;
// };
var _process$env = process.env,
    FATSECRET_KEY = _process$env.FATSECRET_KEY,
    FATSECRET_SECRET = _process$env.FATSECRET_SECRET;
var API = new _fatsecret["default"](FATSECRET_KEY, FATSECRET_SECRET);

var _searchFoods = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
    var response, foods;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return API.method('foods.search', params);

          case 3:
            response = _context.sent;
            // console.log(response)
            foods = response.foods.food;

            if (foods) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", []);

          case 7:
            if (Array.isArray(foods)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", [foods.food_id]);

          case 9:
            return _context.abrupt("return", foods.map(function (food) {
              return food.food_id;
            }));

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.log('ERROR: can not search foods');
            throw _context.t0;

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function _searchFoods(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _getInfo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
    var info;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            info = API.method('food.get.v2', params);
            return _context2.abrupt("return", info);

          case 5:
            _context2.prev = 5;
            _context2.t0 = _context2["catch"](0);
            console.log('ERROR: can not get Info');
            throw _context2.t0;

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 5]]);
  }));

  return function _getInfo(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

function query() {
  return _query.apply(this, arguments);
}

function _query() {
  _query = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var search_expression,
        max_results,
        foods,
        productPromises,
        products,
        _args4 = arguments;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            search_expression = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : '';
            max_results = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : 50;
            _context4.next = 4;
            return _searchFoods({
              search_expression: search_expression,
              max_results: max_results
            });

          case 4:
            foods = _context4.sent;

            if (!(foods === [])) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", []);

          case 7:
            productPromises = foods.map( /*#__PURE__*/function () {
              var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(food_id) {
                var info, nutriments, name, brand, calories, proteins, fats, carbs, product;
                return _regenerator["default"].wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return _getInfo({
                          food_id: food_id
                        });

                      case 2:
                        info = _context3.sent;
                        nutriments = Array.isArray(info.food.servings.serving) ? info.food.servings.serving[0] : info.food.servings.serving;
                        name = info.food.food_name;
                        brand = info.food.brand_name || '';
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

                        if (!(isNaN(calories) || isNaN(proteins) || isNaN(fats) || isNaN(carbs))) {
                          _context3.next = 13;
                          break;
                        }

                        return _context3.abrupt("return");

                      case 13:
                        product = {
                          name: name,
                          brand: brand,
                          calories: calories,
                          proteins: proteins,
                          fats: fats,
                          carbs: carbs
                        };
                        return _context3.abrupt("return", product);

                      case 15:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }());
            _context4.next = 10;
            return Promise.all(productPromises);

          case 10:
            products = _context4.sent;
            return _context4.abrupt("return", products);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _query.apply(this, arguments);
}

query('apple', 2).then(function (data) {
  return console.log(data);
});
var _default = {
  query: query
};
exports["default"] = _default;