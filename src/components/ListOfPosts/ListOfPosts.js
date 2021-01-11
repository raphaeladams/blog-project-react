import React from "react";
import './ListOfPosts.css';
import Post from '../Post';
import {useQuery} from '@apollo/react-hooks';
import POSTS_QUERY from './ListOfPostsQuery';


export default function ListOfPosts() {
  const {loading, error, data} = useQuery(POSTS_QUERY);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <div>Error</div>;

  return (
    <div className="Post">
      {data.microposts.map((post) => {
        return (
          <li><Post post={post}/></li>
        );
      })}
    </div>
  );
}
