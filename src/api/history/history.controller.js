import historyService from './history.service';

export const createHistoryEntry = async (req, res) => {
  const entry = await historyService.create(req.body);
  res.send(entry);
};

export const getHistoryEntry = async (req, res) => {
  const entry = await historyService.getById(req.user._id, req.query.date);
  res.send(entry);
};

export const getHistoryEntries = async (req, res) => {
  const createdBy = req.user._id;
  const entries = await historyService.query(createdBy);
  res.send(entries);
};

export const addEatenFood = async (req, res) => {
  const entry = await historyService.addFood(
    req.user._id,
    req.body.date,
    req.body.food
  );
  res.send(entry);
};

export const updateUserInfo = async (req, res) => {
  const entry = await historyService.updateInfo(
    req.user._id,
    req.body.date,
    req.body.info
  );
  res.send(entry);
};

export const updateEatenFood = async (req, res) => {
  const entry = await historyService.updateFood(
    req.user._id,
    req.body.date,
    req.body.food
  );
  res.send(entry);
};

export const deleteEatenFood = async (req, res) => {
  const entry = await historyService.deleteFood(
    req.user._id,
    req.body.date,
    req.body.food
  );
  res.send(entry);
};
