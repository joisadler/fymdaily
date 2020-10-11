const initialState = {
  itemsType: 'foods',
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_ITEMS_TYPE':
      return { ...state, itemsType: action.itemsType };
    default:
      return state;
  }
}
