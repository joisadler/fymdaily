import foodService from './food.service';

// Create
async function addFood(req, res) {
  const createdBy = req.user._id;
  const food = {
    createdBy,
    ...req.body,
  };
  const newFood = await foodService.add(food);
  res.send(newFood);
}

// Read
async function getFood(req, res) {
  const food = await foodService.getById(req.params.id);
  res.send(food);
}

// List
async function getFoods(req, res) {
  const createdBy = req.user._id;
  const foods = await foodService.query(
    createdBy,
    req.query.name,
    req.query.custom,
  );
  res.send(foods);
}

// Update
async function updateFood(req, res) {
  const food = req.body;
  await foodService.update(food);
  res.send(food);
}

// Delete
async function deleteFood(req, res) {
  await foodService.remove(req.params.id);
  return res.send({
    message: 'Food has been successfully deleted!',
  });
}

module.exports = {
  getFood,
  getFoods,
  addFood,
  updateFood,
  deleteFood,
};
