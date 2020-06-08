import React, { Component } from "react";
import "../../src/styles/navbar.scss";
import header from "../assets/header.png";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <body>
          <nav class="navbar">
            <ul>
              <li>
                <a href="#">About </a>
              </li>
              <li>
                <a href="#">Episodes</a>
              </li>
              <li>
                <a href="#">LOGO</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Media Kit</a>
              </li>
            </ul>
          </nav>
        </body>
      </>
    );
  }
}

export default NavBar;
