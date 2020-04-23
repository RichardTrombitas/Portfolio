import React from "react";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    opacity: "0.5"
  },
});

function Home(){
  const classes = useStyles();
  return (
    <>
      <Header />
      <Particles
        canvasClassName={classes.particlesCanva}
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
        }}
      />
    </>
  );
};

export default Home;
