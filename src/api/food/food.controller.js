import foodService from './food.service';

// Create
export const addFood = async (req, res) => {
  const createdBy = req.user._id;
  const food = {
    createdBy,
    ...req.body,
  };
  const newFood = await foodService.add(food);
  res.send(newFood);
};

// Read
export const getFood = async (req, res) => {
  const food = await foodService.getById(req.params.id);
  res.send(food);
};

// List
export const getFoods = async (req, res) => {
  const createdBy = req.user._id;
  const foods = await foodService.query(
    createdBy,
    req.query.name,
    req.query.custom,
    req.query.showOnlyFoodsCreatedByUser
  );
  res.send(foods);
};

// Update
export const updateFood = async (req, res) => {
  const food = req.body;
  await foodService.update(food);
  res.send(food);
};

// Delete
export const deleteFood = async (req, res) => {
  await foodService.remove(req.params.id);
  return res.send({
    message: 'Food has been successfully deleted!',
  });
};
