import React, { Component } from "react";
import { Link } from "react-scroll";

export class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-link"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={2}
          duration={500}
          className="nav-link"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={2}
          duration={500}
          className="nav-link"
        >
          About
        </Link>
      </div>
    );
  }
}

export default NavBar;
