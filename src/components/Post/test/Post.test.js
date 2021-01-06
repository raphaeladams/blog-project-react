import React from 'react';
import {mount} from '@shopify/react-testing';
import Post from '../Post';
import {createGraphQLFactory} from '@shopify/graphql-testing';

// const createGraphQL = createGraphQLFactory({
//   unionOrIntersectionTypes: [],
// });

const fakePost = {
  content: "Dignissimos tempore necessitatibus cum fugit.",
  updatedAt: "2020-12-02T15:37:21Z",
  user: {
    name: "Example User",
    email: "example@railstutorial.org"
  }
};

describe(('<Post />'), () => {
  it(('toggles from unliked to liked'), () => {
    const wrapper = mount(<Post post={fakePost} />);
    expect(wrapper.find('button').text()).toBe('Unlike');
    //wrapper.find('button').trigger('onClick');
    // expect(wrapper.find('button').text()).toBe('Unlike');
  });
});