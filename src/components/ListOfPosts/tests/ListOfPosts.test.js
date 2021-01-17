import React from 'react';
import wait from 'waait';
import {act} from 'react-dom/test-utils';
import {mount} from '@shopify/react-testing';
import {MockedProvider} from '@apollo/client/testing';
import ListOfPosts from '../ListOfPosts';
import POSTS_QUERY from '../ListOfPostsQuery';


const mocks = [
  {
    request: {
      query: POSTS_QUERY,
    },
    result: {
      data: {
        microposts: [
          {
            id: '1',
            content: 'You miss 100% of the shots you don\'t take - Wayne Gretzky',
            updatedAt: '2021-01-14T15:11:33Z',
            user: {
              name: 'Michael Scott'
            }
          }
        ]
      }
    }
  }
];

describe('<ListOfPosts />', () => {
  it(('loads a list of posts using graphql'), async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ListOfPosts />
      </MockedProvider>
    );

    await act(async () => {
      await wait(0);
    })

    await wrapper.update()
    console.log(wrapper.debug())
    
    expect(wrapper.find(ListOfPosts)).toBeDefined();
  });
});