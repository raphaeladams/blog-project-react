import React from 'react';
import wait from 'waait';
import {act} from 'react-dom/test-utils';
import { mount } from '@shopify/react-testing';
import {MockedProvider} from '@apollo/client/testing';
import { PolarisTestProvider } from '@shopify/polaris';
import NEW_POST_MUTATION from '../NewPostMutation';
import NewPost from '../NewPost';
import {Form, TextField} from '@shopify/polaris';
import en from '@shopify/polaris/locales/en.json';


const mocks = [
  {
    request: {
      query: NEW_POST_MUTATION,
      variables: { content: 'Test' },
    },
    result: {
      data: {
        createMicropost: {
          micropost: {
            content: 'Test',
            user: {
              name: 'Example User',
              email: 'example@railstutorial.org'
            },
          },
        },
      },
    },
  }
];

describe(('<NewPost />'), () => {
  it(('renders loading message'), async () => {
    const wrapper = mount(
      <PolarisTestProvider i18n={en}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <NewPost />
        </MockedProvider>
      </PolarisTestProvider>
    );

    wrapper.find(Form).trigger('onSubmit');

    expect(wrapper.find(NewPost).root.element).toContainHTML('Loading');
  });


  // it(('renders error message'), async () => {
  //   const errorMock = {
  //     request: {
  //       query: NEW_POST_MUTATION,
  //       variables: { content: 'Test' },
  //     },
  //     error: new Error(),
  //   };

  //   const wrapper = mount(
  //     <PolarisTestProvider i18n={en}>
  //       <MockedProvider mocks={[errorMock]} addTypename={false}>
  //         <NewPost />
  //       </MockedProvider>
  //     </PolarisTestProvider>
  //   );

  //   wrapper.find(Form).trigger('onSubmit'); // fires mutation

  //   await act(async () => {
  //     await wait(0);
  //   })
  //   await wrapper.update()
  //   console.log(wrapper.debug());

  //   expect(wrapper.find(NewPost).root.element).toContainHTML('Error');
  // });


  // test handleSubmit

  // test handleContentChange
  it(('handles content change in text field'), async () => {
    const wrapper = mount(
      <PolarisTestProvider i18n={en}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <NewPost />
        </MockedProvider>
      </PolarisTestProvider>
    );

    wrapper.find(TextField).trigger('onChange', 'Hello');

    await act(async () => {
      await wait(0);
    })
    await wrapper.update()
    console.log(wrapper.debug());

    expect(wrapper.find(TextField, {value: 'Hello'})).toBeDefined;
  });
});