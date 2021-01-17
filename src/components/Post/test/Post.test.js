import React from 'react';
import Post from '../Post';
import CommentForm from '../../CommentForm';
import {mount} from '@shopify/react-testing';


const post = <Post 
  userName={'Example User'}
  content={'Dignissimos tempore necessitatibus cum fugit.'}
  date={'2020-12-02T15:37:21Z'}
/>;

describe(('<Post />'), () => {
  it(('shows correct username'), () => {
    const wrapper = mount(post);

    expect(wrapper.find('div', {className: 'user'}).text())
      .toBe('Example User');
  });


  it(('shows correct content'), () => {
    const wrapper = mount(post);

    expect(wrapper.find('div', {className: 'content'}).text())
      .toBe('Dignissimos tempore necessitatibus cum fugit.');
  });

  
  it(('shows correct timestamp'), async () => {
    const wrapper = mount(post);

    expect(wrapper.find('div', {className: 'timestamp'}).text())
      .toBe('Posted 2020-12-02T15:37:21Z');
  });


  it(('toggles Like button text when clicked'), async () => {
    const wrapper = mount(post);

    expect(wrapper.find('button', {name: 'Like'}).text()).toBe('Like');

    wrapper.find('button', {name: 'Like'}).trigger('onClick');
    expect(wrapper.find('button', {name: 'Like'}).text()).toBe('Unlike');

    wrapper.find('button', {name: 'Like'}).trigger('onClick');
    expect(wrapper.find('button', {name: 'Like'}).text()).toBe('Like');
  });


  it(('toggles Comment button text when clicked'), async () => {
    const wrapper = mount(post);

    expect(wrapper.find('button', {name: 'Comment'}).text()).toBe('Comment');

    wrapper.find('button', {name: 'Comment'}).trigger('onClick');
    expect(wrapper.find('button', {name: 'Comment'}).text()).toBe('Post');

    wrapper.find('button', {name: 'Comment'}).trigger('onClick');
    expect(wrapper.find('button', {name: 'Comment'}).text()).toBe('Comment');
  });


  it(('toggles Comment form when Comment button is clicked'), async () => {
    const wrapper = mount(post);

    expect(wrapper.find(CommentForm)).toBe(null);

    wrapper.find('button', {name: 'Comment'}).trigger('onClick');
    expect(wrapper.find(CommentForm)).not.toBe(null);

    wrapper.find('button', {name: 'Comment'}).trigger('onClick');
    expect(wrapper.find(CommentForm)).toBe(null);
  });
});