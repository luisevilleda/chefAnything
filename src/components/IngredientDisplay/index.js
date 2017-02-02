import React from 'react';
import { connect } from 'react-redux';

const listIngredients = ingredients =>
  ingredients.map(ingredient => (
    <li key={ingredient}>
      {ingredient}
    </li>
  ));

const IngredientDisplay = props => (
  <div className="ingredientDisplay">
    <ul>
      { listIngredients(props.ingredients) }
    </ul>
  </div>
);

function mapStateToProps(state) {
  return { ingredients: state.ingredients.ingredients };
}

IngredientDisplay.propTypes = {
  ingredients: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(IngredientDisplay);
