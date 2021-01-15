import React from 'react';
import wait from 'waait';
import {act} from 'react-dom/test-utils';
import {mount} from '@shopify/react-testing';
import {MockedProvider} from '@apollo/client/testing';
import Post from '../Post';
import CommentForm from '../../CommentForm';
import POST_QUERY from '../PostQuery';


const mocks = [
  {
    request: {
      query: POST_QUERY,
    },
    result: {
      data: {
        micropost: {
          content: 'Dignissimos tempore necessitatibus cum fugit.',
          updatedAt: '2020-12-02T15:37:21Z',
          user: {
            name: 'Example User',
            email: 'example@railstutorial.org'
          },
        },
      },
    },
  }
];

describe(('<Post />'), () => {
  it(('loads a post using graphql'), async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Post />
      </MockedProvider>
    );

    expect(wrapper.find(Post)).toBeDefined();
  });


  it(('renders loading message'), async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Post />
      </MockedProvider>
    );

    expect(wrapper.find(Post).root.element).toContainHTML('Loading');
  });


  it(('renders error message'), async () => {
    const errorMock = {
      request: {
        query: POST_QUERY,
      },
      error: new Error(),
    };

    const wrapper = mount(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <Post />
      </MockedProvider>
    );

    await act(async () => {
      await wait(0);
    })
    await wrapper.update()

    expect(wrapper.find(Post).root.element).toContainHTML('Error');
  });


  it(('shows correct username'), async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Post />
      </MockedProvider>
    );

    await act(async () => {
      await wait(0);
    })
    await wrapper.update()

    expect(wrapper.find('div', {className: 'user'}).text()).toBe('Example User');
  });


  it(('shows correct content'), async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Post />
      </MockedProvider>
    );

    await act(async () => {
      await wait(0);
    })
    await wrapper.update()

    expect(wrapper.find('div', {className: 'content'}).text())
      .toBe('Dignissimos tempore necessitatibus cum fugit.');
  });

  
  it(('shows correct timestamp'), async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Post />
      </MockedProvider>
    );

    await act(async () => {
      await wait(0);
    })
    await wrapper.update()

    expect(wrapper.find('div', {className: 'timestamp'}).text())
      .toBe('Posted 2020-12-02T15:37:21Z');
  });


  it(('toggles Like button text when clicked'), async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Post />
      </MockedProvider>
    );

    await act(async () => {
      await wait(0);
    })
    await wrapper.update()

    expect(wrapper.find('button', {name: 'Like'}).text()).toBe('Like');

    wrapper.find('button', {name: 'Like'}).trigger('onClick');
    expect(wrapper.find('button', {name: 'Like'}).text()).toBe('Unlike');

    wrapper.find('button', {name: 'Like'}).trigger('onClick');
    expect(wrapper.find('button', {name: 'Like'}).text()).toBe('Like');
  });


  it(('toggles Comment button text when clicked'), async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Post />
      </MockedProvider>
    );

    await act(async () => {
      await wait(0);
    })
    await wrapper.update()

    expect(wrapper.find('button', {name: 'Comment'}).text()).toBe('Comment');

    wrapper.find('button', {name: 'Comment'}).trigger('onClick');
    expect(wrapper.find('button', {name: 'Comment'}).text()).toBe('Post');

    wrapper.find('button', {name: 'Comment'}).trigger('onClick');
    expect(wrapper.find('button', {name: 'Comment'}).text()).toBe('Comment');
  });


  it(('toggles Comment form when Comment button is clicked'), async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Post />
      </MockedProvider>
    );

    await act(async () => {
      await wait(0);
    })
    await wrapper.update()

    expect(wrapper.find(CommentForm)).toBe(null);

    wrapper.find('button', {name: 'Comment'}).trigger('onClick');
    expect(wrapper.find(CommentForm)).not.toBe(null);

    wrapper.find('button', {name: 'Comment'}).trigger('onClick');
    expect(wrapper.find(CommentForm)).toBe(null);
  });
});