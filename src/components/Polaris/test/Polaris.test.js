import React from 'react';
import wait from 'waait';
import {act} from 'react-dom/test-utils';
import { mount } from '@shopify/react-testing';
import {MockedProvider} from '@apollo/client/testing';
import { PolarisTestProvider } from '@shopify/polaris';
import POLARIS_QUERY from '../PolarisQuery';
import Polaris from '../Polaris';
import {Button, Heading, TextField} from '@shopify/polaris';
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
  }
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

    expect(wrapper.find(Polaris)).toBeDefined();
  });


  it(('renders loading message'), async () => {
    const wrapper = mount(
      <PolarisTestProvider i18n={en}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Polaris />
        </MockedProvider>
      </PolarisTestProvider>
    );

    expect(wrapper.find(Polaris).root.element).toContainHTML('Loading');
  });


  it(('renders error message'), async () => {
    const errorMock = {
      request: {
        query: POLARIS_QUERY,
      },
      error: new Error(),
    };

    const wrapper = mount(
      <PolarisTestProvider i18n={en}>
        <MockedProvider mocks={[errorMock]} addTypename={false}>
          <Polaris />
        </MockedProvider>
      </PolarisTestProvider>
    );

    await act(async () => {
      await wait(0);
    })
    await wrapper.update()

    expect(wrapper.find(Polaris).root.element).toContainHTML('Error');
  });


  it(('shows correct username'), async () => {
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

    expect(wrapper.find(Heading, {className: 'user'}).text()).toBe('Example User');
  });


  it(('shows correct content'), async () => {
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

    expect(wrapper.find('p', {className: 'content'}).text())
      .toBe('Dignissimos tempore necessitatibus cum fugit.');
  });


  it(('shows correct timestamp'), async () => {
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

    expect(wrapper.find('p', {className: 'timestamp'}).text())
      .toBe('Posted 2020-12-02T15:37:21Z');
  });


  it(('toggles Like button text when clicked'), async () => {
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

    expect(wrapper.find(Button, {name: 'Like'}).text()).toBe('Like');

    wrapper.find(Button, {name: 'Like'}).trigger('onClick');
    expect(wrapper.find(Button, {name: 'Like'}).text()).toBe('Unlike');

    wrapper.find(Button, {name: 'Like'}).trigger('onClick');
    expect(wrapper.find(Button, {name: 'Like'}).text()).toBe('Like');
  });


  it(('toggles Comment button text when clicked'), async () => {
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

    expect(wrapper.find(Button, {name: 'Comment'}).text()).toBe('Comment');

    wrapper.find(Button, {name: 'Comment'}).trigger('onClick');
    expect(wrapper.find(Button, {name: 'Comment'}).text()).toBe('Post');

    wrapper.find(Button, {name: 'Comment'}).trigger('onClick');
    expect(wrapper.find(Button, {name: 'Comment'}).text()).toBe('Comment');
  });


  it(('toggles Comment form when Comment button is clicked'), async () => {
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

    expect(wrapper.find(TextField)).toBe(null);

    wrapper.find(Button, {name: 'Comment'}).trigger('onClick');
    expect(wrapper.find(TextField)).not.toBe(null);

    wrapper.find(Button, {name: 'Comment'}).trigger('onClick');
    expect(wrapper.find(TextField)).toBe(null);
  });
});
