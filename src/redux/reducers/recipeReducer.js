const initialState = {
  recipes: [],
  fetchRecipesCalled: false,
  fetchRecipesSuccess: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_RECIPES_FULFILLED': {
      return { ...state,
        recipes: [].concat(action.payload),
        fetchRecipesCalled: true,
        fetchRecipesSuccess: true,
      };
    }
    case 'FETCH_RECIPES_REJECTED': {
      return { ...state,
        fetchRecipesCalled: true,
        fetchRecipesSuccess: false,
      };
    }
    default:
      return initialState;
  }
}
