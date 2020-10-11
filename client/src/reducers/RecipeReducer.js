const initialState = {
  recipes: [],
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_RECIPES':
      return { ...state, recipes: action.recipes };
    case 'ADD_CUSTOM_RECIPE':
      return { ...state, recipes: [...state.recipes, action.newRecipe] };
    case 'UPDATE_CUSTOM_RECIPE':
      return {
        ...state,
        recipes: state.recipes.map(recipe => (
          recipe._id === action.updatedRecipe._id
            ? action.updatedRecipe
            : recipe
        )),
      };
    case 'DELETE_CUSTOM_RECIPE':
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe._id !== action.recipeId),
      };
    default:
      return state;
  }
}
