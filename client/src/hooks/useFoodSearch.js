import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loadFoods } from '../actions/FoodActions';

export default () => {
  const foods = useSelector(state => state.food.foods);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [inputText, setInputText] = useState('');
  useEffect(() => {
    dispatch(loadFoods(inputText, pathname));
  }, [inputText, dispatch, pathname]);
  return {
    inputText,
    setInputText,
    foods,
  };
};
