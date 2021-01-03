import userService from './user.service';

export const getUser = async (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  const userObj = req.user.toObject();
  delete userObj.password;
  res.status(200).send(userObj);
};

export const getUsers = async (req, res) => {
  const users = await userService.query(req.query);
  res.send(users);
};

export const deleteUser = async (req, res) => {
  await userService.remove(req.params.id);
  return res.send({
    message: 'Account has been successfully deleted!',
  });
};

export const updateUser = async (req, res) => {
  const user = req.body;
  await userService.update(user);
  res.send(user);
};

export const addUser = async (req, res) => {
  const user = req.body;
  await userService.add(user);
  res.send(user);
};
