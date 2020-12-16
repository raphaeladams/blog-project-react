import React, { Component } from "react";
import './Header.css';

class Header extends Component {
  render() {
    return <header>
      <h1>
        Raph's Music Blog
      </h1>

      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Help</li>
          <li>Log in</li>
          <li>New Post</li>
        </ul>
      </nav>
    </header>;
  }
}

export default Header;
