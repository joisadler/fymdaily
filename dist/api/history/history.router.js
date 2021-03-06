"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _history = require("./history.controller");

var router = _express["default"].Router();

var isAuthenticated = function isAuthenticated(req, res, next) {
  // console.log('req.user:', req.user, 'req.isAuthenticated:', req.isAuthenticated())
  // return next();
  if (req.isAuthenticated()) return next();
};

router.get('/', isAuthenticated, _history.getHistoryEntries);
router.get('/user-history', isAuthenticated, _history.getHistoryEntry);
router.post('/', isAuthenticated, _history.createHistoryEntry);
router.put('/info', isAuthenticated, _history.updateUserInfo);
router.post('/food', isAuthenticated, _history.addEatenFood);
router.put('/food', isAuthenticated, _history.updateEatenFood);
router["delete"]('/food', isAuthenticated, _history.deleteEatenFood);
module.exports = router;