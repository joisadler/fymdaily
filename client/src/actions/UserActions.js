import userService from '../services/user.service';
import history from '../history';
import MessageActions from './MessageActions';

const { setMessage } = MessageActions;

export function _setUser(user) {
  return {
    type: 'SET_USER',
    user,
  };
}

export function loadUser() {
  return async (dispatch) => {
    try {
      const user = await userService.getUser();
      dispatch(_setUser(user));
    } catch (err) {
      console.log('UserActions: err in loadUser', err);
    }
  };
}

export function updateUser(loggedInUser, newData) {
  return async (dispatch) => {
    try {
      const userData = {
        ...loggedInUser,
        ...newData,
      };
      const user = await userService.update(userData);
      dispatch(_setUser(user));
      history.push('/home');
    } catch (err) {
      console.log('UserActions: err in updateUser', err);
    }
  };
}

export function login(userCreds) {
  return async (dispatch) => {
    const res = await userService.login(userCreds);
    const { user, message } = res;
    if (!user) dispatch(setMessage(message));
    else {
      history.push('/home');
      dispatch(_setUser(user));
      dispatch(setMessage(''));
    }
  };
}

export function signup(userCreds) {
  return async (dispatch) => {
    const res = await userService.signup(userCreds);
    const { user, message } = res;
    if (!user) dispatch(setMessage(message));
    else {
      dispatch(_setUser(user));
      dispatch(setMessage(''));
      history.push('/user-settings');
    }
  };
}

export function logout() {
  return async (dispatch) => {
    dispatch(_setUser(null));
    await userService.logout();
  };
}
