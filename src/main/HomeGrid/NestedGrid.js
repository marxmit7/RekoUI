import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./NestedGrid.css";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 2
    },
    paper: {
        padding: theme.spacing(14),
        color: theme.palette.text.secondary,
        textAlign: "center",
        background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)"
    }
}));

export default function NestedGrid() {
    const classes = useStyles();
    const cells = [
        { id: "Embed", name: "embed_fr" },
        { id: "Image", name: "image_fr" },
        { id: "Video", name: "video_fr" },
        { id: "FeedBack", name: "feedback_fr" },
        // { id: "APIs", name: "apis_fr" },
        { id: "Documentation", name: "documentation_fr" }
    ];

    function clickHandler() {
        console.log("aasdfasdf");
    }

    function FormRow() {
        return (
            <React.Fragment>
                {cells.map(content => (
                    <Grid item xs={4}>
                        <NavLink to={content.id}>
                            <Paper
                                className={[content.name, classes.paper].join(
                                    " "
                                )}
                            >
                                {content.id}
                            </Paper>
                        </NavLink>
                    </Grid>
                ))}
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={5}>
                <FormRow />
            </Grid>
        </div>
    );
}
