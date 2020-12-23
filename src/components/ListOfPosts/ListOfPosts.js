import React from "react";
import './ListOfPosts.css';
import Post from '../Post';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';


const POSTS_QUERY = gql`
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

export default function ListOfPosts() {
  return (
    <Query query={POSTS_QUERY}>
      {({loading, error, data}) => {
        if (loading) return <div>Getting data...</div>
        if (error) return <div>Error! :(</div>
        return (
          <div className="Post">
            {data.microposts.map((post => {
              return (
                <li><Post post={post}/></li>
              );
            }))}
          </div>
        )
      }}
    </Query>
  );
}
