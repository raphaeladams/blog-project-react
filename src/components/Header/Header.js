import React, { Component } from "react";
import './Header.css';

class Header extends Component {
  render() {
    return <header>
      <div class="container">
        Raph's Music Blog
        <nav>
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>

          <ul class = "nav navbar-nav navbar-right collapse navbar-collapse"
              id="bs-example-navbar-collapse-1">
            <li>Home</li>
            <li>About</li>
            <li>Help</li>

            <li>Log in</li>
            
            <li>New Post</li>
          </ul>
        </nav>
      </div>
    </header>;
  }
}

export default Header;
