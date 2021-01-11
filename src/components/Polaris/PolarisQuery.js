// import {gql} from 'apollo-boost';
import gql from 'graphql-tag';

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