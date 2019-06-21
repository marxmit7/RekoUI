import React, { Component } from "react";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { UploadButton } from "../../utils/buttons";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: "center",
        color: theme.palette.text.secondary
    }
}));

class ImageFR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            filetext: "Upload Image"
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0]),
            filetext: null
        });
    }

    render() {
        return (
            <div className={useStyles.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Paper className={useStyles.paper}>
                            <div>
                                <div>
                                    {this.state.filetext}
                                    <img height="300" src={this.state.file} />
                                </div>

                                <div>
                                    <input
                                        accept="image/*"
                                        type="file"
                                        style={{ display: "none" }}
                                        onChange={this.handleChange}
                                        id="contained-button-file"
                                    />
                                    <label htmlFor="contained-button-file">
                                        <UploadButton />
                                    </label>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={useStyles.paper}>xs=12 sm=6</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default ImageFR;
