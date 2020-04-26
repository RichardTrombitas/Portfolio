import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const useStyles = makeStyles({
  aboutText: {
    color: "tan",
    position: "relative",
    //backgroundColor: "red",
    top: "30%",
    left: "50%",
    marginLeft: "-37.65rem",
    width: "75.3rem",
  },

  aboutIcons: {
    color: "tomato",
    fontSize: 100
  },

  aboutIconsText: {
    display: "inline-block",
    color: "white",
    padding: "0 3% 0"
  }
});

const About = () => {
  const classes = useStyles();

  return (
    <div className="about-section" id="about">
      <Typography variant="h5" className={classes.aboutText} align="center">
        I am currently a computer-science student at Babeş-Bolyai University of Cluj-Napoca. <br/>
        I am passionate about web programming and I would love to learn more. <br/>
        Feel free to contact me as I am eager to work with you. <br/> <br/>
        <>
            <Typography variant="h5" className={classes.aboutIconsText} align="center">
                <GitHubIcon className={classes.aboutIcons}/> <br/>
                GitHub
            </Typography>
            <Typography variant="h5" className={classes.aboutIconsText} align="center">
                <LinkedInIcon className={classes.aboutIcons}/> <br/> 
                LinkedIn
            </Typography>
            <Typography variant="h5" className={classes.aboutIconsText} align="center">
                <EmailIcon className={classes.aboutIcons}/> <br/> 
                Email
            </Typography>
            <Typography variant="h5" className={classes.aboutIconsText} align="center">
                <AssignmentIndIcon className={classes.aboutIcons}/> <br/> 
                Resume
            </Typography>         
        </>
      </Typography>
      
    </div>
  );
};

export default About;
