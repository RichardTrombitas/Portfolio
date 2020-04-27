import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Resume from "../Resume.pdf";

const useStyles = makeStyles((theme) => ({
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
    fontSize: 100,
    cursor: "pointer",
  },

  aboutIconsWr: {
    display: "inline-block",
    color: "white",
    padding: "0 3% 0",
  },

  aboutIconsText: {
    cursor: "pointer",
  },

  typography: {
    padding: theme.spacing(2),
  },

  paper: {
    backgroundColor: "#424242",
    color: "white",
  },
}));

const About = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const anchorRef = React.useRef(null);

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleClickAway = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const githubLink = "https://github.com/RichardTrombitas";
  const linkedinLink =
    "https://www.linkedin.com/in/richard-alexandru-trombitas/";
  const email = "richard.trombitas@yahoo.com";

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="about-section" id="about">
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={handleClickAway}>
                <Typography className={classes.typography}>{email}</Typography>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Typography variant="h5" className={classes.aboutText} align="center">
        I'm currently a computer-science student at Babeş-Bolyai University of
        Cluj-Napoca. <br />
        I'm a passionate web developer and would love to learn more. <br />
        Feel free to contact me, we would make a great team!
        <br /> <br />
        <div id="socialIcons">
          <Typography
            variant="h5"
            className={classes.aboutIconsWr}
            align="center"
          >
            <GitHubIcon
              className={classes.aboutIcons}
              onClick={() => {
                openLink(githubLink);
              }}
            />{" "}
            <br />
            <span
              className={classes.aboutIconsText}
              onClick={() => {
                openLink(githubLink);
              }}
            >
              GitHub
            </span>
          </Typography>
          <Typography
            variant="h5"
            className={classes.aboutIconsWr}
            align="center"
          >
            <LinkedInIcon
              className={classes.aboutIcons}
              onClick={() => {
                openLink(linkedinLink);
              }}
            />{" "}
            <br />
            <span
              className={classes.aboutIconsText}
              onClick={() => {
                openLink(linkedinLink);
              }}
            >
              LinkedIn
            </span>
          </Typography>
          <Typography
            variant="h5"
            className={classes.aboutIconsWr}
            align="center"
          >
            <EmailIcon
              className={classes.aboutIcons}
              onClick={handleClick("bottom")}
            />{" "}
            <br />
            <span
              className={classes.aboutIconsText}
              onClick={handleClick("bottom")}
            >
              Email
            </span>
          </Typography>
          <Typography
            variant="h5"
            className={classes.aboutIconsWr}
            align="center"
          >
            <AssignmentIndIcon
              className={classes.aboutIcons}
              onClick={() => {
                openLink(Resume);
              }}
            />{" "}
            <br />
            <span
              className={classes.aboutIconsText}
              onClick={() => {
                openLink(Resume);
              }}
            >
              Resume
            </span>
          </Typography>
        </div>
      </Typography>
    </div>
  );
};

export default About;
