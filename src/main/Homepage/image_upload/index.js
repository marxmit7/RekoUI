import React, { Component } from "react";
import "./index.css";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { UploadButton } from "../../utils/buttons";
import DefaultImageFRView from "./defaultFR/imageView";
import SimFaceForm from "./simface/SimFaceDialogeForm";
import SimFaceView from "./simface/SimFaceView";
import ViewFaceResult from "./simface/ShowResult";
import NSFWview from "./nsfw/NSFWview";
import NSFWForm from "./nsfw/NSFWDialogeForm";

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
            renderView: "defaultView",
            filetext: "Upload Image ",
            resultjson: "Output will be shown here",
            simlarFaceResult: null,
            referenceImage: null,
            compareImage: null,
            simFacePOST: false,
            NSFWimgfile: null
        };
        this.handleDefaultSubmit = this.handleDefaultSubmit.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handleSimiLarFace = this.handleSimiLarFace.bind(this);
        this.renderSwitch = this.renderSwitch.bind(this);
        this.handleSimFaceSubmit = this.handleSimFaceSubmit.bind(this);
        this.handleNSFWSubmit = this.handleNSFWSubmit.bind(this);
        this.handleNSFW = this.handleNSFW.bind(this);
    }
    handleState(event) {
        this.setState({
            file: event.target.files[0],
            preview: URL.createObjectURL(event.target.files[0]),
            filetext: null,
            NSFWimgfile: null,
            referenceImage:null,
            compareImage:null,
            renderView: "defaultView",
            simlarFaceResult: null,
        });
    }

    handleSimiLarFace(refImg, comImg) {
        this.setState({
            referenceImage: refImg,
            compareImage: comImg,
            renderView: "simFaceView",
            simFacePOST: true
        });
    }
    handleNSFW(imgfile) {
        this.setState({
            renderView: "nsfw",
            NSFWimgfile: imgfile,
            filetext: null,
            referenceImage:null,
            compareImage:null,
            simlarFaceResult: null,
        });
    }

    renderSwitch(param) {
        switch (param) {
            case "simFaceView":
                return (
                    <SimFaceView
                        refImage={URL.createObjectURL(
                            this.state.referenceImage
                        )}
                        comImage={URL.createObjectURL(this.state.compareImage)}
                    />
                );
            case "nsfw":
                return (
                    <div>
                        {" "}
                        <NSFWview
                            NSFWprops={URL.createObjectURL(
                                this.state.NSFWimgfile
                            )}
                        />
                    </div>
                );
            default:
                return (
                    <DefaultImageFRView
                        filetext={this.state.filetext}
                        preview={this.state.preview}
                    />
                );
        }
    }

    handleNSFWSubmit(event) {
        event.preventDefault();
        let form_data = new FormData();
        form_data.append("file", this.state.NSFWimgfile);
        let url = "http://localhost:8000/api/nsfw/";
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
    handleDefaultSubmit(event) {
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
    handleSimFaceSubmit(event) {
        event.preventDefault();
        let form_data = new FormData();
        form_data.append("file", this.state.referenceImage);
        form_data.append("compareImage", this.state.compareImage);
        let url = "http://localhost:8000/api/simface/";
        axios
            .post(url, form_data, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            })
            .then(response => {
                this.setState({
                    simlarFaceResult: response.data,
                    resultjson: "Result",
                    simFacePOST: false
                });
            })
            .catch(console.log);
    }

    render() {
        return (
            <div className={useStyles.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        {this.renderSwitch(this.state.renderView)}

                        <div style={{ textAlign: "center" }}>
                            <form>
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
                                        onClick={(() => {
                                            switch (this.state.renderView) {
                                                case "defaultView":
                                                    return this
                                                        .handleDefaultSubmit;
                                                case "nsfw":
                                                    return this
                                                        .handleNSFWSubmit;
                                                case "simFaceView":
                                                    return this
                                                        .handleSimFaceSubmit;
                                                default:
                                                    return this
                                                        .handleDefaultSubmit;
                                            }
                                        })()}
                                    >
                                        Process
                                    </Button>
                                </div>
                            </form>

                            <div>
                                <SimFaceForm
                                    onChangeValue={this.handleSimiLarFace}
                                />
                            </div>

                            <br />
                            <NSFWForm onChangeValue={this.handleNSFW} />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={useStyles.paper}>
                            <div>
                                {" "}
                                <pre>{this.state.resultjson}</pre>
                                {this.state.simlarFaceResult !== null  ? (
                                    <ViewFaceResult
                                        responseResult={
                                            this.state.simlarFaceResult
                                        }
                                    />
                                ) : null}
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default ImageFR;
