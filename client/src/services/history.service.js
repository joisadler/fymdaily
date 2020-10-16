import httpService from './http.service';

// get todays history of the user
export async function getHistoryEntry() {
  const date = new Date().toLocaleDateString('ru-RU');
  const entry = await httpService.get(`history/user-history?date=${date}`);
  return entry;
}

export async function getEatenFoods() {
  const history = await getHistoryEntry();
  return history.eaten_foods;
}

export async function addEatenFood(food) {
  const date = new Date().toLocaleDateString('ru-RU');
  const data = { date, food };
  const updatedEntry = await httpService.post('history/food', data);
  return updatedEntry.eaten_foods;
}

export async function updateEatenFood(food) {
  const date = new Date().toLocaleDateString('ru-RU');
  const data = { date, food };
  const updatedEntry = await httpService.put('history/food', data);
  return updatedEntry.eaten_foods;
}

export async function deleteEatenFood(food) {
  const date = new Date().toLocaleDateString('ru-RU');
  const data = { date, food };
  const updatedEntry = await httpService.delete('history/food', data);
  return updatedEntry.eaten_foods;
}
