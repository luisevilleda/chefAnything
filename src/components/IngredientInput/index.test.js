import React from 'react';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { mount } from 'enzyme';

import IngredientInput from './index';
import store from '../../redux/store';

describe('<IngredientInput />', () => {
  it('Should render without crashing', (done) => {
    const wrapper = mount(
      <Provider store={store}>
        <IngredientInput />
      </Provider>);
    done();
  });

  it('Should render an input box', (done) => {
    const wrapper = mount(
      <Provider store={store}>
        <IngredientInput />
      </Provider>);
    expect(wrapper.find('input').length).to.equal(1);
    done();
  });

  it('Should render a button', (done) => {
    const wrapper = mount(
      <Provider store={store}>
        <IngredientInput />
      </Provider>);
    expect(wrapper.find('button').length).to.equal(1);
    done();
  });
});
