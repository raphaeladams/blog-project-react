import React from 'react';
import wait from 'waait';
import {act} from 'react-dom/test-utils';
import {mount} from '@shopify/react-testing';
import {MockedProvider} from '@apollo/client/testing';
import {PolarisTestProvider} from '@shopify/polaris';
import NewPost from '../NewPost';
import NEW_POST_MUTATION from '../NewPostMutation';
import {Form, TextField} from '@shopify/polaris';
import en from '@shopify/polaris/locales/en.json';


const mocks = [
  {
    request: {
      query: NEW_POST_MUTATION,
      variables: { content: '' },
    },
    result: {
      data: {
        createMicropost: {
          micropost: {
            id: '1',
            content: '',
            user: {
              name: 'Example User',
              email: 'example@railstutorial.org'
            },
          },
        },
      },
    },
  },
];

describe(('<NewPost />'), () => {
  it(('does not render any message before form is submitted'), async () => {
    const wrapper = mount(
      <PolarisTestProvider i18n={en}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <NewPost />
        </MockedProvider>
      </PolarisTestProvider>
    );

    expect(wrapper.find(NewPost).root.element)
      .not.toContainHTML('Loading', 'Error', 'Posted');
  });


  it(('renders Loading message when form is submitted'), async () => {
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


  it(('renders Posted message when post completes successfully'), async () => {
    const wrapper = mount(
      <PolarisTestProvider i18n={en}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <NewPost />
        </MockedProvider>
      </PolarisTestProvider>
    );

    wrapper.find(Form).trigger('onSubmit');

    await act(async () => {
      await wait(0);
    })
    await wrapper.update()
    console.log(wrapper.debug());

    expect(wrapper.find(NewPost).root.element).toContainHTML('Posted');
  });


  it(('renders Error message when post fails'), async () => {
    const errorMocks = [
      {
        request: {
          query: NEW_POST_MUTATION,
          variables: { content: '' },
        },
        error: new Error('Error, something went wrong'),
      },
    ];

    try {
      const wrapper = mount(
        <PolarisTestProvider i18n={en}>
          <MockedProvider mocks={errorMocks} addTypename={false}>
            <NewPost />
          </MockedProvider>
        </PolarisTestProvider>
      );

      wrapper.find(Form).trigger('onSubmit');
    }
    catch {
      await act(async () => {
        await wait(0);
      })

      await wrapper.update()
      console.log(wrapper.debug());

      expect(wrapper.find(NewPost).root.element).toContainHTML('Error');
    }
  });


  it(('handles content change in text field'), async () => {
    const wrapper = mount(
      <PolarisTestProvider i18n={en}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <NewPost />
        </MockedProvider>
      </PolarisTestProvider>
    );

    wrapper.find(TextField).trigger('onChange', 'Hello');

    expect(wrapper.find(TextField, {value: 'Hello'})).toBeDefined;
  });
});