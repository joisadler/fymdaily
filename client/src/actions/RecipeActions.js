import {
  getCustomRecipes,
  addCustomRecipe as createRecipe,
  updateCustomRecipe,
  deleteCustomRecipe as deleteRecipe,
} from '../services/recipe.service';

import { loading, doneLoading } from './SystemActions';

function _setRecipes(recipes) {
  return {
    type: 'SET_RECIPES',
    recipes,
  };
}

function _addRecipe(newRecipe) {
  return {
    type: 'ADD_CUSTOM_RECIPE',
    newRecipe,
  };
}

function _deleteRecipe(recipeId) {
  return {
    type: 'DELETE_CUSTOM_RECIPE',
    recipeId,
  };
}

export function updateRecipe(updatedRecipe) {
  return {
    type: 'UPDATE_CUSTOM_RECIPE',
    updatedRecipe,
  };
}

export function loadRecipes(text) {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const recipes = await getCustomRecipes(text);
      dispatch(_setRecipes(recipes));
    } catch (err) {
      console.log('RecipeActions: err in loadCustomRecipes', err);
    } finally {
      dispatch(doneLoading());
    }
  };
}

export function addCustomRecipe(recipeData) {
  return async (dispatch) => {
    try {
      const newRecipe = await createRecipe(recipeData);
      dispatch(_addRecipe(newRecipe));
    } catch (err) {
      console.log('RecipeActions: err in addCustomRecipe', err);
    }
  };
}

export function updateCustomRecipes(recipeData) {
  return async (dispatch) => {
    try {
      const updatedRecipe = await updateCustomRecipe(recipeData);
      dispatch(updateRecipe(updatedRecipe));
    } catch (err) {
      console.log('RecipeActions: err in updateCustomRecipes', err);
    }
  };
}

export function deleteCustomRecipe(recipeId) {
  return async (dispatch) => {
    try {
      await deleteRecipe(recipeId);
      dispatch(_deleteRecipe(recipeId));
    } catch (err) {
      console.log('RecipeActions: err in deleteCustomRecipe', err);
    }
  };
}
