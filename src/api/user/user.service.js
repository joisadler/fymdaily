import User from '../../models/user';

// Create
async function add(user) {
  try {
    await User.create(user);
    return user;
  } catch (err) {
    console.log('ERROR: cannot insert user');
    throw err;
  }
}

// Read
async function getById(userId) {
  try {
    const user = await User.findById(userId);
    const userObj = user.toObject();
    delete userObj.password;
    return userObj;
  } catch (err) {
    console.log(`ERROR: while finding user ${userId}`);
    throw err;
  }
}

// Read
async function getByEmail(email) {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    console.log(`ERROR: while finding user ${email}`);
    throw err;
  }
}

// Update
async function update(user) {
  try {
    await User.updateOne({ _id: user._id }, { $set: user });
    return user;
  } catch (err) {
    console.log(`ERROR: cannot update user ${user._id}`);
    throw err;
  }
}

// Delete
async function remove(userId) {
  try {
    await User.deleteOne({ _id: userId });
  } catch (err) {
    console.log(`ERROR: cannot remove user ${userId}`);
    throw err;
  }
}

// List
async function query(filterBy = {}) {
  try {
    const users = await User.find(filterBy);
    const usersArr = [];
    users.forEach((user) => {
      user = user.toObject();
      delete user.password;
      usersArr.push(user);
    });
    return usersArr;
  } catch (err) {
    console.log('ERROR: cannot find users');
    throw err;
  }
}

export default {
  query,
  getById,
  getByEmail,
  remove,
  update,
  add,
};
