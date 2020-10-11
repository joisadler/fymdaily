import express from 'express';

import {
  getRecipe,
  getRecipes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
} from './recipe.controller';

const router = express.Router();

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
};

router.get('/', getRecipes);
router.get('/:id', getRecipe);
router.post('/', addRecipe);
router.put('/', isAuthenticated, updateRecipe);
router.delete('/:id', isAuthenticated, deleteRecipe);

module.exports = router;
