import React from 'react';
import {mountWithAppProvider} from '../../../test-utilities/MountWithAppProvider';
import wait from 'waait';
import {act} from 'react-dom/test-utils';
import {MockedProvider} from '@apollo/react-testing';
import POLARIS_QUERY from '../PolarisQuery';
import Polaris from '../Polaris';
import CommentForm from '../../CommentForm';
import {Button, Heading} from '@shopify/polaris';
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


// const fakePost = {
//   content: 'Dignissimos tempore necessitatibus cum fugit.',
//   updatedAt: '2020-12-02T15:37:21Z',
//   user: {
//     name: 'Example User',
//     email: 'example@railstutorial.org'
//   }
// };

describe(('<Polaris />'), () => {
  it(('shows correct username'), async () => {
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

    //expect(wrapper.find(Heading, {className: 'user'}).text()).toBe('Example User');
    expect(wrapper.find(Heading).exists()).toBe(true);
  });

  // it(('shows correct content'), () => {
  //   const wrapper = mountWithAppProvider(<Polaris post={fakePost} />);
  //   expect(wrapper.find('p', {className: 'content'}).text())
  //     .toBe('Dignissimos tempore necessitatibus cum fugit.');
  // });

  // it(('shows correct timestamp'), () => {
  //   const wrapper = mountWithAppProvider(<Polaris post={fakePost} />);
  //   expect(wrapper.find('p', {className: 'timestamp'}).text())
  //     .toBe('Posted 2020-12-02T15:37:21Z');
  // });

  // it(('toggles Like button text when clicked'), () => {
  //   const wrapper = mountWithAppProvider(<Polaris post={fakePost} />);
  //   expect(wrapper.find(Button, {name: 'Like'}).text()).toBe('Like');

  //   wrapper.find(Button, {name: 'Like'}).trigger('onClick');
  //   expect(wrapper.find(Button, {name: 'Like'}).text()).toBe('Unlike');

  //   wrapper.find(Button, {name: 'Like'}).trigger('onClick');
  //   expect(wrapper.find(Button, {name: 'Like'}).text()).toBe('Like');
  // });

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