import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ingredientActions from '../../redux/actions/ingredientActions';

const placeholderText = 'Sweet potatoes...';

let userInput = '';

const handleInputChange = (e) => {
  userInput = e.target.value;
};

const handleButtonClick = (actions) => {
  actions.addIngredient(userInput);
  userInput = '';
};

const IngredientInput = (props) => (
  <div className="inputField">
    <input
      name="ingredient"
      placeholder={placeholderText}
      onChange={e => handleInputChange(e)}
    />
    <button onClick={() => handleButtonClick(props.actions)}>Add Ingredient!</button>
  </div>
);

function mapStateToProps(state) {
  return { ingredients: state.ingredients };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ingredientActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientInput);
