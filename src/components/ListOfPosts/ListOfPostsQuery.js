import gql from 'graphql-tag';


export default gql`
  query {
    microposts {
      content
      updatedAt
      user {
        name
        email
      }
    }
  }
`;