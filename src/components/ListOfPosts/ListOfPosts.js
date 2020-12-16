import React, { Component } from "react";
import './ListOfPosts.css';
import Post from '../Post';

class ListOfPosts extends Component {
  render() {
    return <div className="Post">
      <li><Post/></li>
      <li><Post/></li>
      <li><Post/></li>
    </div>;
  }
}

export default ListOfPosts;
