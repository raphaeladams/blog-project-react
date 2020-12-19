import React, { useState } from "react";
import raphdp from './raphdp.png';
import CommentForm from '../CommentForm';


export default function Post() {
  const [commenting, setCommenting] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <micropost>

      <img src={raphdp}
        alt="display pic"
        className="gravatar"
        style={{width: 120, height: 120}}/>

      <div className="user">JOHN DOE</div>
      <br></br>
      <div className="content">Some test post text, nothing to see here</div>
      <div className="timestamp">Posted 2 hours ago.</div>
      <br></br>

      <button
        onClick={() => setLiked(liked ? false : true)}>
        {liked ? "Unlike" : "Like"}
      </button>
      
      <button
        onClick={() => setCommenting(commenting ? false : true)}>
        {commenting ? "Post" : "Comment"}
      </button>
      {commenting && <CommentForm />}
      
    </micropost>
  );
}
