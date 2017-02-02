const initialState = {
  numIngredients: 0,
  ingredients: [],
};

export default function reducer(state = initialState, action) {
  console.log('IN INGREDIENT REDUCER')
  switch (action.type) {
    case 'ADD_INGREDIENT': {
      console.log('ADD_INGREDIENT')
      return { ...state, numIngredients: state.numIngredients + 1 };
    }
    case 'REMOVE_INGREDIENT': {
      return { ...state, numIngredients: state.numIngredients - 1 };
    }
  }
  return initialState;
}
