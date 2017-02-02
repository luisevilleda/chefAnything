const initialState = {
  numIngredients: 0,
  ingredients: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_INGREDIENT': {
      return { ...state,
        numIngredients: state.numIngredients + 1,
        ingredients: state.ingredients.concat(action.payload) };
    }
    case 'REMOVE_INGREDIENT': {
      console.log('slicing from 0 to ', action.playload);
      console.log('and concattig from ', action.payload + 1);
      return { ...state,
        numIngredients: state.numIngredients - 1,
        ingredients: state.ingredients.slice(0, Number(action.payload))
          .concat(state.ingredients.slice(Number(action.payload) + 1)),
      };
    }
    default:
      return initialState;
  }
}
