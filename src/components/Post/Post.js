import React, { Component } from "react";
import raphdp from './raphdp.png';
import Comment from '../Comment';

class Post extends Component {
  render() {
    return <micropost>
      <img src={raphdp} 
        alt="display pic" 
        className="gravatar"
        style={{width: 50, height: 50}}/>
      <span className="user">JOHN DOE</span>
      <span className="content">Some test post text, nothing to see here</span>
      <span className="timestamp">Posted 2 hours ago.</span>
      <a href="http://shopify.com">See Comments</a>
    </micropost>;
  }
}

export default Post;
