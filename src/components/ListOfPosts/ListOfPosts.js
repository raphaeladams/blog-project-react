import React from "react";
import './ListOfPosts.css';
import Post from '../Post';
import { gql } from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';


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
  const {loading, error, data} = useQuery(POSTS_QUERY);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <div>Error</div>;

  return (
    <div className="Post">
      {data.microposts.map((post => {
        return (
          <li><Post post={post}/></li>
        );
      }))}
    </div>
  );
}
