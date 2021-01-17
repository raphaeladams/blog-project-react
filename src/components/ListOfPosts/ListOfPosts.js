import React from "react";
import './ListOfPosts.css';
import Post from '../Post';
import {useQuery} from '@apollo/client';
import POSTS_QUERY from './ListOfPostsQuery';


export default function ListOfPosts() {
  const {loading, error, data} = useQuery(POSTS_QUERY);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <div>Error</div>;

  return (
    <div className="Post">
      {data.microposts.map((post) => {
        return (
          <li key={post.id}>
            <Post 
              userName={post.user.name}
              content={post.content}
              date={post.updatedAt}
            />
          </li>
        );
      })}
    </div>
  );
}
