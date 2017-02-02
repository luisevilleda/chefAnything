import React from 'react';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { mount } from 'enzyme';

import RecipeDisplay from './index';
import store from '../../redux/store';

describe('<RecipeDisplay />', () => {
  it('Should render without crashing', (done) => {
    const wrapper = mount(
      <Provider store={store}>
        <RecipeDisplay />
      </Provider>);
    done();
  });

  it('Should render a button', (done) => {
    const wrapper = mount(
      <Provider store={store}>
        <RecipeDisplay />
      </Provider>);
    expect(wrapper.find('button').length).to.equal(1);
    done();
  });

  it('Should render a ul', (done) => {
    const wrapper = mount(
      <Provider store={store}>
        <RecipeDisplay />
      </Provider>);
    expect(wrapper.find('ul').length).to.equal(1);
    done();
  });
});
