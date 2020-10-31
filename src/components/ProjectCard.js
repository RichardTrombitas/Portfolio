import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        maxWidth: 355,
        minWidth: 345,
        backgroundColor: "#424242",
        color: "white",
        margin: "3vh",
    },
    content: {
        height: 80,
    },
    buttons: {
        //textShadow: "0px 2px 8px black"
    },
    media: {
        height: 140,
    }
}));

export default function ProjectCard(props) {
    const classes = useStyles();
    const [openVideo, setOpenVideo] = React.useState(false);

    const openLink = (link) => {
        window.open(link, "_blank");
    };

    const handleMouseDown = (e, link) => {
        //0 for left click, 1 for right
        if (e.button !== 0 && e.button !== 1) {
            return;
        }
        if (link !== undefined) {
            openLink(link);
        } else if (props.video !== undefined) {
            handleOpenVideo();
        } else if (props.githubLink !== undefined) {
            openLink(props.githubLink)
        }
    };

    const handleOpenVideo = () => {
        setOpenVideo(true);
    };

    const handleCloseVideo = () => {
        setOpenVideo(false);
    };

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openVideo}
                onClose={handleCloseVideo}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 800,
                }}
            >
                <Fade in={openVideo}>
                    <video
                        src={props.video}
                        controls
                        autoPlay
                        width="70%"
                    />
                </Fade>
            </Modal>
            <Card className={classes.root}>
                <CardActionArea onMouseDown={(e) => handleMouseDown(e)}>
                    <CardMedia className={classes.media} image={props.image}/>
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
                    <Button
                        color="secondary"
                        className={classes.buttons}
                        onMouseDown={(e) => handleMouseDown(e, props.githubLink)}
                    >
                        See on GitHub
                    </Button>
                    {props.liveLink !== undefined || props.video !== undefined ?
                        <Button
                            color="secondary"
                            className={classes.buttons}
                            onMouseDown={(e) => handleMouseDown(e, props.liveLink)}
                        >
                            {props.liveLink !== undefined ? "Live version" : "Play video"}
                        </Button>
                        : ""}
                </CardActions>
            </Card>
        </>
    );
}
