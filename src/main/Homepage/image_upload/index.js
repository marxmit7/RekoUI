import React, { Component } from "react";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { UploadButton, ProcessButton } from "../../utils/buttons";

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

class ImageFR extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            filetext: "Upload Image "
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
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
                                {this.state.filetext}
                                <img height="400" src={this.state.file} />
                            </div>
                        </Paper>

                        <div>
                            <input
                                accept="image/*"
                                type="file"
                                style={{ display: "none" }}
                                onChange={this.handleSubmit}
                                id="contained-button-file"
                            />

                            <div>
                                <label htmlFor="contained-button-file">
                                    <UploadButton />
                                </label>
                            </div>
                            <div
                                onClick={() => {
                                    console.log("onClick");
                                }}>
                                <ProcessButton />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={useStyles.paper}>
                            Result to be shown
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default ImageFR;
