import React from "react";
import './ListOfPosts.css';
import Post from '../Post';


export default function ListOfPosts() {
  return (
    <div className="Post">
      <li><Post/></li>
      <li><Post/></li>
      <li><Post/></li>
    </div>
  );
}
