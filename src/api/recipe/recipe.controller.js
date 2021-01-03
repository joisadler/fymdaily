import recipeService from './recipe.service';

// Create
export const addRecipe = async (req, res) => {
  const createdBy = req.user._id;
  const recipe = {
    createdBy,
    ...req.body,
  };
  const newRecipe = await recipeService.add(recipe);
  res.send(newRecipe);
};

// Read
export const getRecipe = async (req, res) => {
  const recipe = await recipeService.getById(req.params.id);
  res.send(recipe);
};

// List
export const getRecipes = async (req, res) => {
  const createdBy = req.user._id;
  const recipes = await recipeService.query(createdBy, req.query.name);
  res.send(recipes);
};

// Update
export const updateRecipe = async (req, res) => {
  const recipe = req.body;
  const updatedRecipe = await recipeService.update(recipe);
  res.send(updatedRecipe);
};

// Delete
export const deleteRecipe = async (req, res) => {
  await recipeService.remove(req.params.id);
  return res.send({
    message: 'Recipe has been successfully deleted!',
  });
};
