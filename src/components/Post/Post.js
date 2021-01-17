import React, {useState} from 'react';
import raphdp from '../../raphdp.png';
import CommentForm from '../CommentForm';

export default function Post({userName, content, date}) {
  const [commenting, setCommenting] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div>

      <img src={raphdp}
        alt='display pic'
        className='gravatar'
        style={{width: 120, height: 120}}/>

      <div className='user'>{userName}</div>
      <br></br>
      <div className='content'>{content}</div>
      <div className='timestamp'>Posted {date}</div>
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
