import httpService from './http.service';

function getUser() {
  return httpService.get('user');
}

function getById(userId) {
  return httpService.get(`user/${userId}`);
}

function remove(userId) {
  return httpService.delete(`user/${userId}`);
}

function update(user) {
  return httpService.put(`user/${user._id}`, user);
}

async function login(userCred) {
  const res = await httpService.post('auth/login', userCred);
  if (res.user) {
    return res;
  }
  return res;
}

async function signup(userCred) {
  const res = await httpService.post('auth/signup', userCred);
  if (res.user) {
    return res;
  }
  return res;
}

async function logout() {
  await httpService.post('auth/logout');
  localStorage.clear();
}

export default {
  login,
  logout,
  signup,
  getUser,
  getById,
  remove,
  update,
};
