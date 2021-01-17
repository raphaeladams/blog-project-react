import React from 'react';
import {mount} from '@shopify/react-testing';
import Header from '../Header';
import {BrowserRouter, Link} from 'react-router-dom';


describe(('<Header />'), () => {
  it(('has correct Home link'), () => {
    const wrapper = mount(<BrowserRouter><Header /></BrowserRouter>);
    expect(wrapper.find(Link, {to: '/'}).text()).toBe('Home');
  });

  it(('has correct About link'), () => {
    const wrapper = mount(<BrowserRouter><Header /></BrowserRouter>);
    expect(wrapper.find(Link, {to: '/about'}).text()).toBe('About');
  });

  it(('has correct Users link'), () => {
    const wrapper = mount(<BrowserRouter><Header /></BrowserRouter>);
    expect(wrapper.find(Link, {to: '/users'}).text()).toBe('Users');
  });

  it(('has correct New Post link'), () => {
    const wrapper = mount(<BrowserRouter><Header /></BrowserRouter>);
    expect(wrapper.find(Link, {to: '/posts/new'}).text()).toBe('New Post');
  });
});