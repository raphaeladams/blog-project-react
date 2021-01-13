import React, {useState} from 'react';
import raphdp from '../../raphdp.png';
import CommentForm from '../CommentForm';
import POST_QUERY from './PostQuery';
import {useQuery} from '@apollo/client';

export default function Post({postId}) {
  const [commenting, setCommenting] = useState(false);
  const [liked, setLiked] = useState(false);

  const {loading, error, data} = useQuery(
    POST_QUERY,
    {variables: {id: postId}}
  );
  
  if (loading) return <p>Loading...</p>;
  if (error) return <div>Error</div>;

  return (
    <div>

      <img src={raphdp}
        alt='display pic'
        className='gravatar'
        style={{width: 120, height: 120}}/>

      <div className='user'>{data.micropost.user.name}</div>
      <br></br>
      <div className='content'>{data.micropost.content}</div>
      <div className='timestamp'>Posted {data.micropost.updatedAt}</div>
      <br></br>

      <button 
        name='Like'
        onClick={() => setLiked(liked ? false : true)}>
        {liked ? 'Unlike' : 'Like'}
      </button>
      
      <button
        name='Comment'
        onClick={() => setCommenting(commenting ? false : true)}>
        {commenting ? 'Post' : 'Comment'}
      </button>
      {commenting && <CommentForm />}
      
    </div>
  );
}
