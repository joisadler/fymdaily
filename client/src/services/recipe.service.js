import httpService from './http.service';

export async function getCustomRecipes(name) {
  const recipes = await httpService.get(`recipe?name=${name}`);
  return recipes;
}

export async function addCustomRecipe(recipeData) {
  const recipe = await httpService.post('recipe', recipeData);
  return recipe;
}

export async function updateCustomRecipe(recipeData) {
  const recipe = await httpService.put('recipe', recipeData);
  return recipe;
}

export async function deleteCustomRecipe(recipeId) {
  const recipe = await httpService.delete(`recipe/${recipeId}`);
  return recipe;
}
