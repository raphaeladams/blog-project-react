import React from 'react';
import wait from 'waait';
import {act} from 'react-dom/test-utils';
// import {MockedProvider} from '@apollo/react-testing';
import {MockedProvider} from '@apollo/client/testing';
import TestRenderer from 'react-test-renderer';

import POLARIS_QUERY from '../PolarisQuery';
import Polaris from '../Polaris';
import { mountWithApolloProvider } from '../../../test-utilities/MountWithApolloProvider';
import { mountWithGraphQL } from '../../../test-utilities/MountWithGraphQL';
import { mount } from '@shopify/react-testing';
import { PolarisTestProvider } from '@shopify/polaris';
import en from '@shopify/polaris/locales/en.json';


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
          },
        },
      },
    },
  },
];

describe(('<Polaris />'), () => {
  it(('loads a post using graphql'), async () => {
    const wrapper = mount(
      <PolarisTestProvider i18n={en}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Polaris />
        </MockedProvider>
      </PolarisTestProvider>
    );

    await act(async () => {
      await wait(0);
    })

    await wrapper.update()
    console.log(wrapper.debug())

    expect(wrapper.find(Polaris)).toBeDefined();
  });

  it(('renders loading message'), async () => {
    const wrapper = mountWithGraphQL(
      <PolarisTestProvider i18n={en}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Polaris />
        </MockedProvider>
      </PolarisTestProvider>
    );
    // await act(async () => {
    //   await wait(0);
    // })

    // await wrapper.update()
    // console.log(wrapper.debug())

    expect(wrapper.find(Polaris)).toContain('Loading');
  });
});