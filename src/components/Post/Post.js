import React, { Component } from "react";
import raphdp from './raphdp.png';

class Post extends Component {
  render() {
    return <micropost>
      <img src={raphdp} 
        alt="display pic" 
        class="gravatar"
        style={{width: 50, height: 50}}/>
      <span class="user">JOHN DOE</span>
      <span class="content">Some test post text, nothing to see here</span>
      <span class="timestamp">Posted 2 hours ago.</span>
    </micropost>;
  }
}

export default Post;
