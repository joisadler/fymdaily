let localLoggedinUser = null;
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user);

const initialState = {
  loggedInUser: localLoggedinUser,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_USER':
      if (!action.user) {
        sessionStorage.setItem('user', null);
        return state;
      }
      sessionStorage.setItem('user', JSON.stringify({
        ...action.user,
      }));
      return {
        ...state,
        loggedInUser: {
          ...action.user,
        },
      };
    default:
      return state;
  }
}
