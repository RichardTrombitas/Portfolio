import React, { Component } from "react";
import Particles from "react-particles-js";

class ParticlesContainer extends Component {
  render() {
    return (
      <Particles
        canvasClassName="particlesCanvas"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
                duration: 3000,
              },
            },
            modes: {
              repulse: {
                distance: 100,
              },
            },
          },
        }}
      />
    );
  }
}

export default ParticlesContainer;
