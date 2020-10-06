const initialState = {
  isShown: false,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case 'SHOW_MENU':
      return { ...state, isShown: false };
    case 'HIDE_MENU':
      return { ...state, isShown: false };
    case 'TOGGLE_MENU':
      return { ...state, isShown: !state.isShown };
    default:
      return state;
  }
}
