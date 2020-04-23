import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js"
import Home from "./components/Home.js";
import Projects from "./components/Projects.js"
import About from "./components/About.js"
import Particles from "react-particles-js";


function App() {
  return (
    <>
    <NavBar/>
    <div id="background"></div>
    <Particles
        canvasClassName={"particlesCanvas"}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1000
              }
            },
          },
        }}/>
    <Home />
    <Projects />
    <About/>
    </>
  );
}

export default App;
