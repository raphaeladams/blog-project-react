import React from 'react';
import App from './App';
import wait from 'waait';
import {act} from 'react-dom/test-utils';
import {mount} from '@shopify/react-testing';
import {MockedProvider} from '@apollo/client/testing';
import Header from './components/Header';
import Footer from './components/Footer';
import Polaris from './components/Polaris';
import Users from './components/Users';
import NewPost from './components/NewPost';
import ListOfPosts from './components/ListOfPosts';
import POSTS_QUERY from './components/ListOfPosts/ListOfPostsQuery';


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

describe('<App />', () => {
  it(('renders App correctly'), async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    await act(async () => {
      await wait(0);
    })

    await wrapper.update()
    console.log(wrapper.debug())

    expect(wrapper.find(Header)).toBeDefined();
    expect(wrapper.find(Polaris)).toBeDefined();
    expect(wrapper.find(Users)).toBeDefined();
    expect(wrapper.find(NewPost)).toBeDefined();
    expect(wrapper.find(ListOfPosts)).toBeDefined();
    expect(wrapper.find(Footer)).toBeDefined();
  });
});
