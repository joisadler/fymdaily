const initialState = {
  loggedInUser: {},
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_USER':
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
