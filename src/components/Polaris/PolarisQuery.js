import {gql} from 'apollo-boost';


export default gql`
query {
  micropost (id: 1) {
    content
    updatedAt
    user {
      name
    }
  }
}
`;