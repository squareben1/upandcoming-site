import React, { Component } from "react";
import "../../src/styles/navbar.scss";
import header from "../assets/header.png";
import { Link } from "react-scroll";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <body>
          <nav class="navbar">
            <ul>
              <li>
                <Link
                  to="aboutSection"
                  spy={true}
                  smooth={true}
                  delay={200}
                  duration={1000}
                  className="navLink"
                  activeClass="activeClass"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="episodes"
                  spy={true}
                  smooth={true}
                  delay={200}
                  duration={1000}
                  className="navLink"
                  activeClass="activeClass"
                >
                  EPISODES
                </Link>
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
