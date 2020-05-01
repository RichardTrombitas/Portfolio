import React, { Component } from "react";
import { Link } from "react-scroll";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: "home",
    };
  }

  setActiveNavLink = (navLinkId) => {
    let elems = document.querySelectorAll(".nav-link");
    elems.forEach((el) => {
      el.classList.remove("activeNavLink");
    });
    document.getElementById(navLinkId).classList.add("activeNavLink");
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      const delim1 = document.getElementById("projects").offsetTop - 200;
      const delim2 = document.getElementById("about").offsetTop - 200;
      if (scroll < delim1) {
        this.setActiveNavLink("homeNavLink");
      } else if (scroll > delim1 && scroll < delim2) {
        this.setActiveNavLink("projectsNavLink");
      } else {
        this.setActiveNavLink("aboutNavLink");
      }
    });
  }

  render() {
    return (
      <div className="navbar">
        <Link
          id="homeNavLink"
          to="home"
          spy={false}
          smooth={true}
          offset={0}
          duration={600}
          className={"nav-link activeNavLink"}
        >
          Home
        </Link>
        <Link
          id="projectsNavLink"
          to="projects"
          spy={false}
          smooth={true}
          offset={0}
          duration={600}
          className={"nav-link"}
        >
          Projects
        </Link>
        <Link
          id="aboutNavLink"
          to="about"
          spy={false}
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
