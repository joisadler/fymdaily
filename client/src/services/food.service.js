import httpService from './http.service';

export async function getFoods(name) {
  const foods = await httpService.get(`food?name=${name}`);
  return foods;
}

export async function getCustomFoods(name) {
  const foods = await httpService.get(`food?name=${name}&custom=true`);
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
