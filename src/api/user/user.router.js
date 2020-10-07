import express from 'express';
import {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  addUser,
} from './user.controller';

const router = express.Router();

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
};

// router.get('/', getUsers);
// router.get('/:id', getUser);
router.get('/', getUser);
router.post('/', addUser);
router.put('/:id', isAuthenticated, updateUser);
router.delete('/:id', isAuthenticated, deleteUser);

module.exports = router;
