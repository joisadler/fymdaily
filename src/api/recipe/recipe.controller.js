import recipeService from './recipe.service';

// Create
async function addRecipe(req, res) {
  const createdBy = req.user._id;
  const recipe = {
    createdBy,
    ...req.body,
  };
  const newRecipe = await recipeService.add(recipe);
  res.send(newRecipe);
}

// Read
async function getRecipe(req, res) {
  const recipe = await recipeService.getById(req.params.id);
  res.send(recipe);
}

// List
async function getRecipes(req, res) {
  const createdBy = req.user._id;
  const recipes = await recipeService.query(
    createdBy,
    req.query.name,
  );
  res.send(recipes);
}

// Update
async function updateRecipe(req, res) {
  const recipe = req.body;
  await recipeService.update(recipe);
  res.send(recipe);
}

// Delete
async function deleteRecipe(req, res) {
  await recipeService.remove(req.params.id);
  return res.send({
    message: 'Recipe has been successfully deleted!',
  });
}

module.exports = {
  getRecipe,
  getRecipes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
};
