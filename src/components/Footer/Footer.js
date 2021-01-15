import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer>
      <small>&copy; Raph's Music Blog</small>

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
        </ul>
      </nav>
    </footer>
  );
}
