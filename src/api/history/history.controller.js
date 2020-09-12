import historyService from './history.service';

// Create
async function createHistoryEntry(req, res) {
  const entry = await historyService.create(req.body);
  res.send(entry);
}

// Read
async function getHistoryEntry(req, res) {
  const entry = await historyService.getById(req.params.id, req.body.date);
  res.send(entry);
}

// Update (add eaten food)
async function addEatenFood(req, res) {
  const entry = await historyService.addFood(
    req.user._id,
    req.body.date,
    req.body.food,
  );
  res.send(entry);
}

// List
async function getHistoryEntries(req, res) {
  const createdBy = req.user._id;
  const entries = await historyService.query(createdBy);
  res.send(entries);
}

async function updateUserInfo(req, res) {
  const entry = await historyService.updateInfo(
    req.user._id,
    req.body.date,
    req.body.info,
  );
  res.send(entry);
}

// // Update
// async function updateHistoryEntry(req, res) {
//   const entry = req.body;
//   await historyService.update(entry);
//   res.send(entry);
// }

// // Delete
// async function deleteHistoryEntry(req, res) {
//   await historyService.remove(req.params.id);
//   return res.send({
//     message: 'HistoryEntry has been successfully deleted!',
//   });
// }

module.exports = {
  createHistoryEntry,
  getHistoryEntry,
  getHistoryEntries,
  addEatenFood,
  updateUserInfo,
  // updateEatenFood,
  // deleteEatenFood,
};
