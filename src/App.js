import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ingredientActions from './redux/actions/ingredientActions';
import IngredientInput from './components/IngredientInput';
import IngredientDisplay from './components/IngredientDisplay';
import RecipeDisplay from './components/RecipeDisplay';

import './App.css';

function mapStateToProps(state) {
  return { ingredients: state.ingredients };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ingredientActions, dispatch) };
}

const App = (props) => {
  return (
    <div>
      <p>Welcome to chefAnything!</p>
      <IngredientInput />
      <IngredientDisplay />
      <RecipeDisplay />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
