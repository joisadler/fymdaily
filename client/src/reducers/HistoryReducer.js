const initialState = {
  eatenFoods: null,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_EATEN_FOODS':
      return { ...state, eatenFoods: action.eatenFoods };
    case 'ADD_EATEN_FOOD':
      return { ...state, eatenFoods: [...state.eatenFoods, action.newFood] };
    default:
      return state;
  }
}
