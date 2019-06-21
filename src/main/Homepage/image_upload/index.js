import React, { Component } from "react";
import "./index.css";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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

class ImageFR extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            preview: null,
            filetext: "Upload Image ",
            resultjson: "Output will be shown here"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleState = this.handleState.bind(this);
    }
    handleState(event) {
        this.setState({
            file: event.target.files[0],
            preview: URL.createObjectURL(event.target.files[0]),
            filetext: null
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        let form_data = new FormData();
        form_data.append("file", this.state.file);
        let url = "http://localhost:8000/api/image/";
        axios
            .post(url, form_data, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            })
            .then(response => {
                this.setState({
                    resultjson: JSON.stringify(response.data, null, 2)
                });
            })
            .catch(console.log);
    }

    render() {
        return (
            <div className={useStyles.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Paper className={useStyles.paper}>
                            <div>
                                {this.state.filetext}
                                <img height="400" src={this.state.preview} />
                            </div>
                        </Paper>

                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <input
                                    accept="image/*"
                                    type="file"
                                    style={{ display: "none" }}
                                    onChange={this.handleState}
                                    id="contained-button-file"
                                    required
                                />

                                <div>
                                    <label htmlFor="contained-button-file">
                                        <UploadButton />
                                    </label>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleSubmit}
                                    >
                                        Process
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={useStyles.paper}>
                            <div>
                                {" "}
                                <pre>{this.state.resultjson}</pre>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default ImageFR;
