import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as recipeActions from '../../redux/actions/recipeActions';


const handleRecipeFetch = actions => actions.fetchRecipes(['apple', 'butter']);

const mappedRecipes = recipes => recipes.map(recipe => {
  return (
    <li>
      <span>{recipe.title}</span>
      <img className="recipeImage" src={recipe.image} />
    </li>
  );
});

const RecipeDisplay = props => (
  <div className="recipeDisplay">
    <button onClick={() => handleRecipeFetch(props.actions)}>What can I cook?</button>
    <ul>
      {mappedRecipes(props.recipes.recipes)}
    </ul>
  </div>
);

function mapStateToProps(state) {
  return { recipes: state.recipes };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(recipeActions, dispatch) };
}

RecipeDisplay.propTypes = {
  recipes: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  actions: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDisplay);
