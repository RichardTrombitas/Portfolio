import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#424242",
    color: "white",
    margin: "3vh",
  },
  content: {
    height: 80
  },
  buttons: {
    //textShadow: "0px 2px 8px black"
  },
  media: {
    height: 140,
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();
  const openLink = (link) => {
    window.open(link, '_blank');
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => {openLink(props.liveLink)}}>
        <CardMedia className={classes.media} image={props.image} />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="secondary" className={classes.buttons} onClick={() => {openLink(props.githubLink)}}>
          See on GitHub
        </Button>
        <Button color="secondary" className={classes.buttons} onClick={() => {openLink(props.liveLink)}}>
          Live version
        </Button>
      </CardActions>
    </Card>
  );
}
