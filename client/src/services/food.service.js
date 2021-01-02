import httpService from './http.service';

export async function getFoods(name, showOnlyFoodsCreatedByUser) {
  const foods = await httpService.get(`food?name=${name}&showOnlyFoodsCreatedByUser=${showOnlyFoodsCreatedByUser}`);
  return foods;
}

export async function getCustomFoods(name, showOnlyFoodsCreatedByUser) {
  const foods = await httpService.get(`food?name=${name}&custom=true&showOnlyFoodsCreatedByUser=${showOnlyFoodsCreatedByUser}`);
  return foods;
}

export async function addCustomFood(foodData) {
  const food = await httpService.post('food', foodData);
  return food;
}

export async function updateCustomFood(foodData) {
  const food = await httpService.put('food', foodData);
  return food;
}

export async function deleteCustomFood(foodId) {
  const food = await httpService.delete(`food/${foodId}`);
  return food;
}
