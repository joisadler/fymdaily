import express from 'express';

import {
  getFood,
  getFoods,
  addFood,
  updateFood,
  deleteFood,
} from './food.controller';

const router = express.Router();

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
};

router.get('/', getFoods);
router.get('/:id', getFood);
router.post('/', addFood);
router.put('/', isAuthenticated, updateFood);
router.delete('/:id', isAuthenticated, deleteFood);

module.exports = router;
