import React from 'react';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { mount } from 'enzyme';

import IngredientDisplay from './index';
import store from '../../redux/store';

describe('<IngredientDisplay />', () => {
  it('Should render without crashing', (done) => {
    const wrapper = mount(
      <Provider store={store}>
        <IngredientDisplay />
      </Provider>);
    done();
  });

  it('Should render an ul', (done) => {
    const wrapper = mount(
      <Provider store={store}>
        <IngredientDisplay />
      </Provider>);
    expect(wrapper.find('ul').length).to.equal(1);
    done();
  });

});
