const initialState = {
  foods: [],
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_FOODS':
      return { ...state, foods: action.foods };
    case 'ADD_CUSTOM_FOOD':
      return { ...state, foods: [...state.foods, action.newFood] };
    case 'UPDATE_CUSTOM_FOOD':
      return {
        ...state,
        foods: state.foods.map(food => (
          food._id === action.updatedFood._id
            ? action.updatedFood
            : food
        )),
      };
      case 'DELETE_CUSTOM_FOOD':
      return {
        ...state,
        foods: state.foods.filter(food => food._id !== action.foodId),
      };
    default:
      return state;
  }
}
