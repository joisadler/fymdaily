"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _user = require("./user.controller");

// import { requireAuth } from '../../../middlewares/requireAuth.middleware';
var router = _express["default"].Router(); // // middleware that is specific to this router
// router.use(requireAuth);
// router.get('/', getUsers);
// router.get('/:id', getUser);
// router.put('/:id', requireAuth, updateUser);
// router.delete('/:id', requireAuth, deleteUser);
// eslint-disable-next-line consistent-return


var isAuthenticated = function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
};

router.get('/', _user.getUsers);
router.get('/:id', _user.getUser);
router.put('/:id', isAuthenticated, _user.updateUser);
router["delete"]('/:id', isAuthenticated, _user.deleteUser);
router.post('/', _user.addUser);
module.exports = router;