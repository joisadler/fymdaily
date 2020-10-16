import historyService from './history.service';

async function createHistoryEntry(req, res) {
  const entry = await historyService.create(req.body);
  res.send(entry);
}

async function getHistoryEntry(req, res) {
  const entry = await historyService.getById(req.user._id, req.query.date);
  res.send(entry);
}

async function getHistoryEntries(req, res) {
  const createdBy = req.user._id;
  const entries = await historyService.query(createdBy);
  res.send(entries);
}

async function addEatenFood(req, res) {
  const entry = await historyService.addFood(
    req.user._id,
    req.body.date,
    req.body.food,
  );
  res.send(entry);
}

async function updateUserInfo(req, res) {
  const entry = await historyService.updateInfo(
    req.user._id,
    req.body.date,
    req.body.info,
  );
  res.send(entry);
}

async function updateEatenFood(req, res) {
  const entry = await historyService.updateFood(
    req.user._id,
    req.body.date,
    req.body.food,
  );
  res.send(entry);
}

async function deleteEatenFood(req, res) {
  const entry = await historyService.deleteFood(
    req.user._id,
    req.body.date,
    req.body.food,
  );
  res.send(entry);
}

module.exports = {
  createHistoryEntry,
  getHistoryEntry,
  getHistoryEntries,
  addEatenFood,
  updateUserInfo,
  updateEatenFood,
  deleteEatenFood,
};
