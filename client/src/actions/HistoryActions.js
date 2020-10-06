import {
  getEatenFoods,
  addEatenFood as addFood,
  updateEatenFood,
  deleteEatenFood as deleteFood,
} from '../services/history.service';

import { loading, doneLoading } from './SystemActions';

import history from '../history';

export function setEatenFoods(eatenFoods) {
  return {
    type: 'SET_EATEN_FOODS',
    eatenFoods,
  };
}

export function loadEatenFoods(userId) {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const eatenFoods = await getEatenFoods(userId);
      dispatch(setEatenFoods(eatenFoods));
    } catch (err) {
      console.log('HistoryActions: err in loadEatenFoods', err);
    } finally {
      dispatch(doneLoading());
    }
  };
}

export function addEatenFood(newFood) {
  return async (dispatch) => {
    try {
      const updatedFoods = await addFood(newFood);
      dispatch(setEatenFoods(updatedFoods));
      history.push('/home');
    } catch (err) {
      console.log('HistoryActions: err in addEatenFood', err);
    }
  };
}

export function updateEatenFoods(updatedFood) {
  return async (dispatch) => {
    try {
      const updatedFoods = await updateEatenFood(updatedFood);
      dispatch(setEatenFoods(updatedFoods));
    } catch (err) {
      console.log('HistoryActions: err in updateEatenFoods', err);
    }
  };
}

export function deleteEatenFood(food) {
  return async (dispatch) => {
    try {
      const updatedFoods = await deleteFood(food);
      dispatch(setEatenFoods(updatedFoods));
    } catch (err) {
      console.log('HistoryActions: err in deleteEatenFood', err);
    }
  };
}
