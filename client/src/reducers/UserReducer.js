const initialState = {
  loggedInUser: {},
};

export default (state = initialState, action = {}) => {
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
};
