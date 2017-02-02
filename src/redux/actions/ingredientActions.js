export function addIngredient(ingredient) {
  return {
    type: 'ADD_INGREDIENT',
    payload: ingredient,
  };
}

export function removeIngredient(ingredientIndex) {
  return {
    type: 'REMOVE_INGREDIENT',
    payload: ingredientIndex,
  };
}
