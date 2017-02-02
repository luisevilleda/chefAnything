import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as recipeActions from '../../redux/actions/recipeActions';


const handleRecipeFetch = (actions, ingredients) => actions.fetchRecipes(ingredients);

const mappedRecipes = recipes => recipes.map(recipe => (
  <li key={recipe.title}>
    <span>{recipe.title}</span>
    <img alt={recipe.title} className="recipeImage" src={recipe.image} />
  </li>
));

const RecipeDisplay = props => (
  <div className="recipeDisplay">
    <button onClick={() => handleRecipeFetch(props.actions, props.ingredients.ingredients)}>
      What can I cook?
    </button>
    <ul>
      {mappedRecipes(props.recipes.recipes)}
    </ul>
  </div>
);

function mapStateToProps(state) {
  return { recipes: state.recipes, ingredients: state.ingredients };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(recipeActions, dispatch) };
}

RecipeDisplay.propTypes = {
  recipes: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  actions: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  ingredients: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDisplay);
