import React from 'react';
import {mount} from '@shopify/react-testing';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';


describe(('<Header />'), () => {
  it(('has correct header title'), () => {
    const wrapper = mount(<BrowserRouter><Header /></BrowserRouter>);
    expect(wrapper.find('h1').text()).toBe('Raph\'s Music Blog');
  });
});