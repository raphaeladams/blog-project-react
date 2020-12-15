import React, { Component } from "react";
import './ListOfPosts.css';

class ListOfPosts extends Component {
  render() {
    return <li id="micropost-1">
      {/* <%= link_to gravatar_for(micropost.user, size: 50), micropost.user %> */}
      <span class="user">JOHN DOE</span>
      <span class="content">LOREM IPSUM</span>
      <span class="timestamp">
        Posted TIME AGO IN WORDS ago.
      </span>
    </li>;
  }
}

export default ListOfPosts;
