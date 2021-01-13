import React from 'react';
import wait from 'waait';
import {act} from 'react-dom/test-utils';
import {MockedProvider} from '@apollo/react-testing';
import POSTS_QUERY from '../ListOfPostsQuery';
import ListOfPosts from '../ListOfPosts';
import { mountWithApolloProvider } from '../../../test-utilities/MountWithApolloProvider';


const mocks = [
  {
    request: {
      query: POSTS_QUERY,
    },
    result: {
      data: {
        microposts: [
          {
            content: 'One post of many!',
            updatedAt: '2020-12-02T15:37:21Z',
            user: {
              name: 'Wayne Gretzky',
              email: 'wayne@example.com'
            }
          }
        ]
      }
    }
  }
];

describe('<ListOfPosts />', () => {
  it(('loads a list of posts using graphql'), async () => {
    const wrapper = mountWithApolloProvider(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ListOfPosts />
      </MockedProvider>
    );

    // await act(async () => {
    //   await wait(0);
    // })

    // await wrapper.update()
    // console.log(wrapper.debug())
    expect(wrapper.find(ListOfPosts)).toBeDefined();
  });
});