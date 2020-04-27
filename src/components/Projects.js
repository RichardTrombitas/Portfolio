import React from 'react'
import ProjectCard from "./ProjectCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import tictactoe from "../images/tictactoe.png";
import calc from "../images/calc.png";
import msn from "../images/msnLogo.png";

const useStyles = makeStyles({
  projectsContainer: {
    position: "relative",
    //backgroundColor: "blue",
    top: "25%",
    left: "50%",
    marginLeft: "-37.65rem",
    width: "75.3rem",
  }
});

const Projects = () => {
    const classes = useStyles();

    return (
        <div className="projects-section" id="projects">
          <Grid container className={classes.projectsContainer}>
            <ProjectCard
              image={tictactoe}
              title="Tic-Tac-Toe"
              description="A Tic-Tac-Toe game made in HTML5, CSS3 and JavaScript."
              githubLink="https://github.com/RichardTrombitas/Tic-Tac-Toe"
              liveLink="https://richardtrombitas.github.io/Tic-Tac-Toe"
            />
            <ProjectCard
              image={calc}
              title="Calculator"
              description="A JavaScript calculator that does what you expect it to do."
              githubLink="https://github.com/RichardTrombitas/Calculator"
              liveLink="https://richardtrombitas.github.io/Calculator/"
            />
            <ProjectCard
              image={msn}
              title="MSN Clone"
              description="A visual clone of MSN made in HTML5 and CSS3."
              githubLink="https://github.com/RichardTrombitas/MSN-Clone"
              liveLink="https://richardtrombitas.github.io/MSN-Clone"
            />
          </Grid>
        </div>
      );
}

export default Projects;
