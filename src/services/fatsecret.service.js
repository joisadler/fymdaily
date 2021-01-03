/* eslint-disable max-len */
import FatsecretAPI from 'fatsecret';

const { FATSECRET_KEY, FATSECRET_SECRET } = process.env;
const API = new FatsecretAPI(FATSECRET_KEY, FATSECRET_SECRET);

const _searchFoods = async (params) => {
  try {
    const response = await API.method('foods.search', params);
    // console.log('response:', response)
    const foods = response.foods.food || response.foods;
    // console.log('foods: ', foods)
    if (response.error || !foods) {
      console.log(response.error);
      return [];
    }
    if (!Array.isArray(foods)) return [foods.food_id];
    return foods.map((f) => f.food_id);
  } catch (err) {
    console.log('ERROR: can not search foods');
    console.error(err);
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

async function query(search_expression = '', max_results = 10) {
  try {
    const start1 = new Date();
    const foodIDs = await _searchFoods({
      search_expression,
      max_results,
    });
    console.log(
      'Request to Fatsecret API for food IDs took:',
      new Date() - start1,
      'ms'
    );
    if (!foodIDs || foodIDs === []) return {};
    const foodPromises = foodIDs.map(async (food_id) => {
      const info = await _getInfo({ food_id });
      if (!info.food) return null;
      const nutriments = Array.isArray(info.food.servings.serving)
        ? info.food.servings.serving[0]
        : info.food.servings.serving;
      const name = info.food.food_name;
      const brand = info.food.brand_name || '';
      let calories =
        (nutriments.calories * 100) / nutriments.metric_serving_amount;
      let proteins =
        (nutriments.protein * 100) / nutriments.metric_serving_amount;
      let fats = (nutriments.fat * 100) / nutriments.metric_serving_amount;
      let carbs = (nutriments.sugar * 100) / nutriments.metric_serving_amount;
      if (nutriments.metric_serving_unit === 'oz') {
        calories /= 29.574;
        proteins /= 29.574;
        fats /= 29.574;
        carbs /= 29.574;
      }
      if (isNaN(calories) || isNaN(proteins) || isNaN(fats) || isNaN(carbs)) {
        return;
      }
      const food = {
        name,
        brand,
        calories,
        proteins,
        fats,
        carbs,
      };
      return food;
    });
    const start2 = new Date();
    const foods = await Promise.all(foodPromises);
    console.log(
      'Request to Fatsecret API for foods info took:',
      new Date() - start2,
      'ms'
    );
    return foods.filter((food) => food);
  } catch (err) {
    console.log('ERROR: can not query');
    throw err;
  }
}

export default {
  query,
};
