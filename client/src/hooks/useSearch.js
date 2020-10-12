import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loadFoods } from '../actions/FoodActions';
import { loadRecipes } from '../actions/RecipeActions';

export default (itemsType) => {
  const foods = useSelector(state => state.food.foods);
  const recipes = useSelector(state => state.recipe.recipes);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (itemsType === 'foods') {
      dispatch(loadFoods(inputText, pathname));
    }
    if (itemsType === 'recipes') {
      dispatch(loadRecipes(inputText));
    } else {
      dispatch(loadFoods(inputText, pathname));
      dispatch(loadRecipes(inputText));
    }
  }, [inputText, dispatch, pathname, itemsType]);

  return {
    inputText,
    setInputText,
    foods,
    recipes,
  };
};
