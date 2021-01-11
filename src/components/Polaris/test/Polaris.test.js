import React from 'react';
import wait from 'waait';
import {act} from 'react-dom/test-utils';
import {MockedProvider} from '@apollo/react-testing';
import POLARIS_QUERY from '../PolarisQuery';
import Polaris from '../Polaris';
import { mountWithApolloProvider } from '../../../test-utilities/MountWithApolloProvider';


const mocks = [
  {
    request: {
      query: POLARIS_QUERY,
    },
    result: {
      data: {
        micropost: {
          content: 'Dignissimos tempore necessitatibus cum fugit.',
          updatedAt: '2020-12-02T15:37:21Z',
          user: {
            name: 'Example User',
            email: 'example@railstutorial.org'
          }
        }
      }
    }
  }
];

describe(('<Polaris />'), () => {
  it(('loads a post using graphql'), async () => {
    const wrapper = mountWithApolloProvider(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Polaris />
      </MockedProvider>
    );

    await act(async () => {
      await wait(0);
    })

    await wrapper.update()
    console.log(wrapper.debug())

    expect(wrapper.find(Polaris)).toBeDefined();
  });

  it(('toggles Like button text when clicked'), async () => {
    const wrapper = mountWithApolloProvider(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Polaris />
      </MockedProvider>
    );

    await act(async () => {
      await wait(0);
    })

    await wrapper.update()
    console.log(wrapper.debug())

    expect(wrapper.find(Button, {name: 'Like'}).text()).toBe('Like');

    wrapper.find(Button, {name: 'Like'}).trigger('onClick');
    expect(wrapper.find(Button, {name: 'Like'}).text()).toBe('Unlike');

    wrapper.find(Button, {name: 'Like'}).trigger('onClick');
    expect(wrapper.find(Button, {name: 'Like'}).text()).toBe('Like');
  });

  // it(('toggles Comment button text when clicked'), () => {
  //   const wrapper = mountWithAppProvider(<Polaris post={fakePost} />);
  //   expect(wrapper.find(Button, {name: 'Comment'}).text()).toBe('Comment');

  //   wrapper.find(Button, {name: 'Comment'}).trigger('onClick');
  //   expect(wrapper.find(Button, {name: 'Comment'}).text()).toBe('Post');

  //   wrapper.find(Button, {name: 'Comment'}).trigger('onClick');
  //   expect(wrapper.find(Button, {name: 'Comment'}).text()).toBe('Comment');
  // });

  // it(('toggles Comment form when Comment button is clicked'), () => {
  //   const wrapper = mountWithAppProvider(<Polaris post={fakePost} />);
  //   expect(wrapper.find(CommentForm)).toBe(null);

  //   wrapper.find(Button, {name: 'Comment'}).trigger('onClick');
  //   expect(wrapper.find(CommentForm)).not.toBe(null);

  //   wrapper.find(Button, {name: 'Comment'}).trigger('onClick');
  //   expect(wrapper.find(CommentForm)).toBe(null);
  // });
});