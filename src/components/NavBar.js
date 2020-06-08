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
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">EPISODES</a>
              </li>
              <li>
              <div className="logoContainer">
            <img className="logoPic" src={header} alt="header" />
          </div>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
              <li>
                <a href="#">MEDIA KIT</a>
              </li>
            </ul>
          </nav>
        </body>
      </>
    );
  }
}

export default NavBar;
