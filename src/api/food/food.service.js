import Food from '../../models/food';
import fatsecretService from '../../services/fatsecret.service';

// Create
async function add(food) {
  try {
    const name = food.name.trim();
    const brand = food.brand.trim();
    const {
      createdBy,
      calories,
      proteins,
      fats,
      carbs,
    } = food;
    const newFood = (await Food.findOrCreate({
      createdBy,
      name,
      brand,
      calories,
      proteins,
      fats,
      carbs,
    })).doc;
    return newFood;
  } catch (err) {
    console.error(err);
  }
}

// Read
async function getById(_id) {
  try {
    const food = await Food.findById(_id);
    return food;
  } catch (err) {
    console.log(`ERROR: while finding food with id:${_id}`);
    throw err;
  }
}

// List
async function query(createdBy, name = '', custom = false) {
  try {
    const queryParams = {
      createdBy,
      name: new RegExp(`${name.trim()}`, 'i'),
    };
    const foodsCreatedByUser = await Food.find(queryParams);
    const regex = /^[A-Za-z0-9]+$/; // name contains only english letters or numbers
    const nameIsNotValidForFatsecretApi = !regex.test(name);
    if (custom || name === '' || nameIsNotValidForFatsecretApi) {
      return [...foodsCreatedByUser];
    }
    const foodsFromFatSecretAPI = await fatsecretService.query(name);
    const foods = [...foodsCreatedByUser, ...foodsFromFatSecretAPI];
    return foods;
  } catch (err) {
    console.log('ERROR: cannot find food');
    throw err;
  }
}

// Update
async function update(food) {
  const name = food.name.trim();
  const brand = food.brand.trim();
  const {
    _id,
    calories,
    proteins,
    fats,
    carbs,
  } = food;
  try {
    await Food.findByIdAndUpdate({ _id }, {
      name,
      brand,
      calories,
      proteins,
      fats,
      carbs,
    });
    return food;
  } catch (err) {
    console.error(err);
  }
}

// Delete
async function remove(id) {
  try {
    await Food.findByIdAndRemove(id);
  } catch (err) {
    console.error(err);
  }
}

export default {
  add,
  getById,
  query,
  update,
  remove,
};
