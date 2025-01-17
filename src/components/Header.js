import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import logo from "../images/logo.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100wv",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={logo} alt="Richard Trombitaș" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed
          strings={["Hello.", "I'm Richard Trombitaș."]}
          typeSpeed={40}
          startDelay={500}
          backSpeed={50}
          backDelay={1000}
        />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Let's build something special.",
            "Let's build something special. Together.",
          ]}
          startDelay={4730}
          typeSpeed={40}
        />
      </Typography>
    </Box>
  );
};

export default Header;
