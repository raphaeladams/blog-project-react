import React from "react";
import './Header.css';
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header>
      <h1>Raph's Music Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/posts/new">New Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
