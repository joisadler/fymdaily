import HistoryEntry from '../../models/history-entry';
import User from '../../models/user';

// Create
async function create(params) {
  try {
    const entry = await HistoryEntry.create(params);
    return entry;
  } catch (err) {
    console.log('ERROR: while creating entry');
    throw err;
  }
}

// Read
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

// Update (update user info)
async function updateInfo(userId, date, info) {
  try {
    const entry = (await HistoryEntry.findOrCreate({ userId, date })).doc;
    entry.info = info;
    entry.save();
    await User.findOneAndUpdate({ _id: userId }, info);
    console.log('ENTRY:', entry)
    return entry;
  } catch (err) {
    console.log('ERROR: while updating info');
    throw err;
  }
}

// List
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
  // remove,
  query,
};
