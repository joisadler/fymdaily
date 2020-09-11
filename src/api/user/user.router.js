import express from 'express';
// import { requireAuth } from '../../../middlewares/requireAuth.middleware';
import { getUser, getUsers, deleteUser, updateUser, addUser } from './user.controller';

const router = express.Router();

// // middleware that is specific to this router
// router.use(requireAuth);

// router.get('/', getUsers);
// router.get('/:id', getUser);
// router.put('/:id', requireAuth, updateUser);
// router.delete('/:id', requireAuth, deleteUser);

// eslint-disable-next-line consistent-return
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
};

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', addUser);
router.put('/:id', isAuthenticated, updateUser);
router.delete('/:id', isAuthenticated, deleteUser);

module.exports = router;
