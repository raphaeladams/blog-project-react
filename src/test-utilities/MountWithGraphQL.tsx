import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {createGraphQLFactory, GraphQL} from '@shopify/graphql-testing';
import {createMount} from '@shopify/react-testing';

// See graphql-testing docs for details
const createGraphQL = createGraphQLFactory();

// Here, we define the options a user can pass to mount. We need them to be able
// to pass two things: an optional GraphQL instance to drive the test, and an
// optional flag to skip initial GraphQL resolution.
interface Options {
  graphQL?: GraphQL;
  skipInitialGraphQL?: boolean;
}

// Next is the context. We only want to expose one thing as "context": The GraphQL
// instance driving the test.
interface Context {
  graphQL: GraphQL;
}

// Now, we can create our custom mount function! Unfortunately, due to limitations in
// TypeScript, you usually need to pass all the generic arguments, including the last
// one, which specifies whether your `afterMount` is async or not.
export const mountWithGraphQL = createMount<Options, Context, true>({
  // Step one: convert Options to Context
  context({graphQL = createGraphQL()}) {
    return {graphQL};
  },
  // Step two: use Context and Options to render the element under the test
  // with the necessary providers
  render(element, {graphQL}) {
    return <ApolloProvider client={graphQL.client}>{element}</ApolloProvider>;
  },
  // Final step: if we need post-mount behavior, inject it in. If it returns
  // a promise, like it does here, the final mount function will be async too.
  async afterMount(root, {skipInitialGraphQL}) {
    const {graphQL} = root.context;

    // This makes it so any GraphQL resolution is wrapped in
    // an act() block, which prevents setting state outside of
    // act().
    graphQL.wrap(perform => root.act(perform));

    if (skipInitialGraphQL) {
      return;
    }

    // Here's the important bit: resolve the GraphQL so our first queries are
    // in use for the component under test
    await graphQL.resolveAll();
  },
});