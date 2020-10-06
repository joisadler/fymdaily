import httpService from './http.service';

function getUsers() {
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

function _handleLogin(res) {
  sessionStorage.setItem('user', JSON.stringify(res.user));
  return res;
}

async function login(userCred, isRememberMeChecked) {
  const res = await httpService.post('auth/login', userCred);
  if (res.user) {
    if (isRememberMeChecked) {
      return _handleLogin(res);
    }
    return res;
  }
  return res;
}

async function signup(userCred, isRememberMeChecked) {
  const res = await httpService.post('auth/signup', userCred);
  if (res.user) {
    if (isRememberMeChecked) {
      return _handleLogin(res);
    }
    return res;
  }
  return res;
}

async function logout() {
  await httpService.post('auth/logout');
  sessionStorage.clear();
}

export default {
  login,
  logout,
  signup,
  getUsers,
  getById,
  remove,
  update,
};
