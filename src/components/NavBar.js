import React, { Component } from "react";
import { Link } from "react-scroll";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: "home"
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 500) {
        this.setState({activeLink : "home"});
      } else if (window.scrollY < 1000) {
        this.setState({activeLink : "projects"});
      } else {
        this.setState({activeLink : "about"});
      }
    });
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
          className={"nav-link" + (this.state.activeLink === "home" ? " activated" : "")}
        >
          Home
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          className={"nav-link" + (this.state.activeLink === "projects" ? " activated" : "")}
        >
          Projects
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          className={"nav-link" + (this.state.activeLink === "about" ? " activated" : "")}
        >
          About
        </Link>
      </div>
    );
  }
}

export default NavBar;
