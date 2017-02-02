const initialState = {
  numRecipes: 0,
  Recipes: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_RECIPES': {
      return { ...state, numRecipes: state.numRecipes + 1 };
    }
    case 'REMOVE_INGREDIENT': {
      return { ...state, numRecipes: state.numRecipes - 1 };
    }
    default:
      return initialState;
  }
}
