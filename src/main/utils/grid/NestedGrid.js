import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./NestedGrid.css";

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

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper className={["embed_fr", classes.paper].join(" ")}>
                        Embed
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={["image_fr", classes.paper].join(" ")}>
                        Image
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={["video_fr", classes.paper].join(" ")}>
                        Video
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={["feedback_fr", classes.paper].join(" ")}>
                        FeedBack
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={["apis_fr", classes.paper].join(" ")}>
                        APIs
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper
                        className={["documentation_fr", classes.paper].join(
                            " "
                        )}
                    >
                        Documentation
                    </Paper>
                </Grid>
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
