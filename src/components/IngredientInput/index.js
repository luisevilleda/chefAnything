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
  document.getElementById('ingredientInput').value = userInput;
};

const handleKeyPress = (e, actions) => {
  if (e.key === 'Enter') {
    handleButtonClick(actions);
  }
};

const IngredientInput = props => (
  <div className="inputField">
    <input
      name="ingredient"
      id="ingredientInput"
      placeholder={placeholderText}
      onChange={e => handleInputChange(e)}
      onKeyPress={e => handleKeyPress(e, props.actions)}
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

IngredientInput.propTypes = {
  actions: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientInput);
