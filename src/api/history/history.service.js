import HistoryEntry from '../../models/history-entry';
import User from '../../models/user';

// Create history entry
async function create(params) {
  try {
    const entry = await HistoryEntry.create(params);
    return entry;
  } catch (err) {
    console.log('ERROR: while creating entry');
    throw err;
  }
}

// Read users history entry by date
async function getById(userId, date) {
  try {
    const entry = await HistoryEntry.findOrCreate({ userId, date });
    return entry.doc;
  } catch (err) {
    console.log('ERROR: while finding entry');
    throw err;
  }
}

// Update (add eaten food)
async function addFood(userId, date, food) {
  try {
    const entry = (await HistoryEntry.findOrCreate({ userId, date })).doc;
    entry.eaten_foods.push(food);
    entry.save();
    return entry;
  } catch (err) {
    console.log('ERROR: while adding eaten food');
    throw err;
  }
}

// Update user info
async function updateInfo(userId, date, info) {
  try {
    const entry = (await HistoryEntry.findOrCreate({ userId, date })).doc;
    entry.info = info;
    entry.save();
    await User.findOneAndUpdate({ _id: userId }, info);
    return entry;
  } catch (err) {
    console.log('ERROR: while updating info');
    throw err;
  }
}

// Update eaten food
async function updateFood(userId, date, food) {
  const { weight, _id } = food;
  const entry = await HistoryEntry.findOne({ userId, date });
  const { eaten_foods } = entry;
  const updatedFoods = eaten_foods.slice();
  updatedFoods.forEach((f) => {
    if (String(f._id) === _id) {
      f.weight = weight;
    }
  });
  entry.eaten_foods = updatedFoods;
  entry.save();
  return entry;
}

// Delete eaten food
async function deleteFood(userId, date, food) {
  const { _id } = food;
  const entry = await HistoryEntry.findOne({ userId, date });
  const { eaten_foods } = entry;
  const updatedFoods = eaten_foods.slice();
  updatedFoods.forEach((f, i, arr) => {
    if (String(f._id) === _id) {
      arr.splice(i, 1);
    }
  });
  entry.eaten_foods = updatedFoods;
  entry.save();
  return entry;
}

// List of all history entries of the user
async function query(userId) {
  try {
    const entries = await HistoryEntry.find({ userId });
    return entries;
  } catch (err) {
    console.log(`ERROR: while finding entries of user ${userId}`);
  }
}

export default {
  create,
  getById,
  addFood,
  updateInfo,
  updateFood,
  deleteFood,
  query,
};
