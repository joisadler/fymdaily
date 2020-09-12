"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _history = require("./history.controller");

var router = _express["default"].Router();

var isAuthenticated = function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
};

router.get('/', isAuthenticated, _history.getHistoryEntries);
router.get('/:id', isAuthenticated, _history.getHistoryEntry);
router.post('/', isAuthenticated, _history.createHistoryEntry);
router.put('/food', isAuthenticated, _history.addEatenFood);
router.put('/info', isAuthenticated, _history.updateUserInfo); // router.put('/', isAuthenticated, updateHistoryEntry);
// router.delete('/:id', isAuthenticated, deleteHistoryEntry);

module.exports = router;