import React, { Component } from "react";
import { Link } from "react-scroll";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: "home"
    }
  }


  render() {
    return (
      <div className="navbar">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          className={"nav-link"}
        >
          Home
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          className={"nav-link"}
        >
          Projects
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          className={"nav-link"}
        >
          About
        </Link>
      </div>
    );
  }
}

export default NavBar;
