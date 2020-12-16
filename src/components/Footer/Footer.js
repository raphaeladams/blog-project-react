import React, { Component } from "react";
import './Footer.css';

class Footer extends Component {
  render() {
    return <footer>
      <small>
        &copy; Raph's Music Blog
      </small>

      <nav>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>News</li>
        </ul>
      </nav>
    </footer>;
  }
}

export default Footer;
