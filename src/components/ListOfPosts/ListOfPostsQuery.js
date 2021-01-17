import gql from 'graphql-tag';

export default gql`
  query {
    microposts {
      id
      content
      updatedAt
      user {
        name
      }
    }
  }
`;
