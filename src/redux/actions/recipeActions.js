import axios from 'axios';

import config from '../../config';

export function fetchRecipes(ingredients) {
  console.log('FETCH RECIPES CALLED');
  return (dispatch) => {
    axios.get(config.url, {
      headers: {
        'X-Mashape-Key': config.key,
        accept: 'application/json',
      },
      params: {
        fillIngredients: false,
        ingredients: ingredients.join(','),
        limitLicense: false,
        number: 5,
        ranking: 1,
      },
    })
    .then(response => dispatch({
      type: 'FETCH_RECIPES_FULFILLED',
      payload: response.data,
    }))
    .catch(error => dispatch({
      type: 'FETCH_RECIPES_REJECTED',
      payload: error,
    }));
  };
}
