import gql from 'graphql-tag';

export default gql`
mutation CreateMicropost($content: String!) {
  createMicropost(input: {micropostRequest: {content: $content, userId: 1}})
  {
    micropost {
      id
      content
      user {
        name
        email
      }
    }
  }
}
`;
