import React, { Component } from "react";
import "./index.css";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { UploadButton } from "../../utils/buttons";
import ImageView from "./defaultFR/imageView";
import SimFaceCheck from "./simface/SimFaceCheck"

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
            renderview: "default",
            filetext: "Upload Image ",
            resultjson: "Output will be shown here",
            referenceImage:null,
            compareImage:null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handleSimiLarFace = this.handleSimiLarFace.bind(this);
        this.renderSwitch = this.renderSwitch.bind(this);
    }
    handleState(event) {
        this.setState({
            file: event.target.files[0],
            preview: URL.createObjectURL(event.target.files[0]),
            filetext: null
        });
    }
    handleSimiLarFace(refImg,comImg)
    {
        this.setState({
            referenceImage:refImg,
            compareImage:comImg
        })
    }

    handleSubmit(event) {
        event.preventDefault();
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

    renderSwitch(param) {
        switch (param) {
            case "default":
                return (
                    <ImageView
                        filetext={this.state.filetext}
                        preview={this.state.preview}
                    />
                );
            default:
                return (
                    <ImageView
                        filetext={this.state.filetext}
                        preview={this.state.preview}
                    />
                );
        }
    }

    render() {
        return (
            <div className={useStyles.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        {this.renderSwitch(this.state.renderview)}

                        <div style={{ textAlign: "center" }}>
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

                            <din>
                                <Button
                                    variant="contained"
                                    onClick={this.handleSimiLarFace}
                                >
                                    Similar Face
                                </Button>
                                <SimFaceCheck    onChangeValue={this.handleSimiLarFace}/>
                                {console.log("bingbongbing",this.state.referenceImage)}
                            </din>
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
