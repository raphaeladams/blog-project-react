import React from 'react';
import {mount} from '@shopify/react-testing';
import Footer from '../Footer';
import { BrowserRouter, Link } from 'react-router-dom';


describe(('<Footer />'), () => {
  it(('has correct Home link'), () => {
    const wrapper = mount(<BrowserRouter><Footer /></BrowserRouter>);
    expect(wrapper.find(Link, {to: '/'}).text()).toBe('Home');
  });

  it(('has correct About link'), () => {
    const wrapper = mount(<BrowserRouter><Footer /></BrowserRouter>);
    expect(wrapper.find(Link, {to: '/about'}).text()).toBe('About');
  });

  it(('has correct Users link'), () => {
    const wrapper = mount(<BrowserRouter><Footer /></BrowserRouter>);
    expect(wrapper.find(Link, {to: '/users'}).text()).toBe('Users');
  });
});