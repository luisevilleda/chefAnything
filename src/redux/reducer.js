import { combineReducers } from 'redux';

import ingredients from './reducers/ingredientReducer';
import recipes from './reducers/recipeReducer';

export default combineReducers({
  ingredients,
  recipes,
});
