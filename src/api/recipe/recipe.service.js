import Recipe from '../../models/recipe';

// Create
async function add(recipe) {
  try {
    const name = recipe.name.trim();
    const {
      createdBy,
      calories,
      proteins,
      fats,
      carbs,
      ingredients,
    } = recipe;
    const newRecipe = (await Recipe.findOrCreate({
      createdBy,
      name,
      calories,
      proteins,
      fats,
      carbs,
      ingredients,
    })).doc;
    return newRecipe;
  } catch (err) {
    console.error(err);
  }
}

// Read
async function getById(_id) {
  try {
    const recipe = await Recipe.findById(_id);
    return recipe;
  } catch (err) {
    console.log(`ERROR: while finding recipe with id:${_id}`);
    throw err;
  }
}

// List
async function query(createdBy, name = '') {
  try {
    const queryParams = {
      createdBy,
      name: new RegExp(`${name.trim()}`, 'i'),
    };
    const start = new Date();
    const recipes = await Recipe.find(queryParams);
    // eslint-disable-next-line max-len
    console.log('Request to MongoDB for recipes took:', new Date() - start, 'ms');
    if (name === '') {
      return [...recipes];
    }
  } catch (err) {
    console.log('ERROR: cannot find recipe');
    throw err;
  }
}

// Update
async function update(recipe) {
  const name = recipe.name.trim();
  const {
    _id,
    ingredients,
    calories,
    proteins,
    fats,
    carbs,
  } = recipe;
  try {
    await Recipe.findByIdAndUpdate({ _id }, {
      name,
      ingredients,
      calories,
      proteins,
      fats,
      carbs,
    });
    return recipe;
  } catch (err) {
    console.error(err);
  }
}

// Delete
async function remove(id) {
  try {
    await Recipe.findByIdAndRemove(id);
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
