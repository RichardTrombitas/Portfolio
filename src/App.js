import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js"
import Home from "./components/Home.js";
import Projects from "./components/Projects.js"
import About from "./components/About.js"

function App() {
  return (
    <>
    <NavBar/>
    <Home />
    <Projects />
    <About/>
    </>
  );
}

export default App;
