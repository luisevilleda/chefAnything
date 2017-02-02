import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ingredientActions from '../../redux/actions/ingredientActions';

const handleButtonClick = (e, actions) => {
  const index = e.target.parentNode.children[0].dataset.index;
  actions.removeIngredient(index);
};

const listIngredients = (ingredients, actions) =>
  ingredients.map((ingredient, i) => (
    <li key={ingredient}>
      <span className="ingredientName" data-index={i}>
        {ingredient}
      </span>
      <button onClick={e => handleButtonClick(e, actions)}> X </button>
    </li>
  ));

const IngredientDisplay = props => (
  <div className="ingredientDisplay">
    <ul>
      { listIngredients(props.ingredients, props.actions) }
    </ul>
  </div>
);

function mapStateToProps(state) {
  return { ingredients: state.ingredients.ingredients };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ingredientActions, dispatch) };
}

IngredientDisplay.propTypes = {
  ingredients: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientDisplay);
