/* eslint-disable max-len */
import FatsecretAPI from 'fatsecret';

const { FATSECRET_KEY, FATSECRET_SECRET } = process.env;
const API = new FatsecretAPI(FATSECRET_KEY, FATSECRET_SECRET);

const _searchFoods = async (params) => {
  try {
    const response = await API.method('foods.search', params);
    const foods = response.foods.food;
    if (!foods) return [];
    if (!Array.isArray(foods)) return [foods.food_id];
    return foods.map(food => food.food_id);
  } catch (err) {
    console.log('ERROR: can not search foods');
    throw err;
  }
};

const _getInfo = async (params) => {
  try {
    const info = API.method('food.get.v2', params);
    return info;
  } catch (err) {
    console.log('ERROR: can not get Info');
    throw err;
  }
};

async function query(search_expression = '', max_results = 50) {
  const foods = await _searchFoods({
    search_expression,
    max_results,
  });
  if (foods === []) return [];
  const productPromises = foods.map(async (food_id) => {
    const info = await _getInfo({ food_id });
    const nutriments = Array.isArray(info.food.servings.serving)
      ? info.food.servings.serving[0]
      : info.food.servings.serving;
    const name = info.food.food_name;
    const brand = info.food.brand_name || '';
    let calories = (nutriments.calories * 100) / nutriments.metric_serving_amount;
    let proteins = (nutriments.protein * 100) / nutriments.metric_serving_amount;
    let fats = (nutriments.fat * 100) / nutriments.metric_serving_amount;
    let carbs = (nutriments.sugar * 100) / nutriments.metric_serving_amount;
    if (nutriments.metric_serving_unit === 'oz') {
      calories /= 29.574;
      proteins /= 29.574;
      fats /= 29.574;
      carbs /= 29.574;
    }
    if (isNaN(calories)
      || isNaN(proteins)
      || isNaN(fats)
      || isNaN(carbs)) {
      return;
    }
    const product = {
      name,
      brand,
      calories,
      proteins,
      fats,
      carbs,
    };
    return product;
  });
  const products = await Promise.all(productPromises);
  return products;
}

export default {
  query,
};
