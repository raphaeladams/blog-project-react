import gql from 'graphql-tag';

export default gql`
query GetMicropost($id: ID!) {
  micropost(id: $id) {
    content
    updatedAt
    user {
      name
      email
    }
  }
}
`;
