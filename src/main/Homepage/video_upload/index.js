import React, { Component } from "react";
import "./index.css";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { UploadButton, AddNewLink } from "../../utils/buttons";
import YouTubePlayer from "./yt";
import YTFormDialog from "./formYTlink";
import VideoViewBox from "./uploadedVideoViewBox";
// https://blog.teamtreehouse.com/building-custom-controls-for-html5-videos
class VideoFR extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            preview: null,
            fileid: null,
            filetext: "Upload Video ",
            resultjson: "Output will be shown here",
            link: null,
            showYTComponent: false,
            defaultVideoBox: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleState = this.handleState.bind(this);
        this._onAddLinkButtonClick = this._onAddLinkButtonClick.bind(this);
    }
    handleState(event) {
        this.setState({
            file: event.target.files[0],
            preview: URL.createObjectURL(event.target.files[0]),
            filetext: null
        });
    }

    _onAddLinkButtonClick() {
        this.setState({
            defaultVideoBox: false
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let form_data = new FormData();
        form_data.append("file", this.state.file);
        let url = "http://localhost:8000/api/old_video/";
        axios
            .post(url, form_data, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            })
            .then(response => {
                this.setState({
                    fileid: response.data,
                    resultjson: JSON.stringify(response.data, null, 2)
                });
            })
            .catch(console.log);
    }

    render() {
        const link = "https://www.youtube.com/embed/hbAUwi4D3Ew";
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Paper>
                            {this.state.defaultVideoBox ? (
                                <VideoViewBox
                                    filetext={this.state.filetext}
                                    preview={this.state.preview}
                                />
                            ) : <YouTubePlayer link={link} />}
                        </Paper>

                        <div style={{ textAlign: "center" }}>
                            <form onSubmit={this.handleSubmit}>
                                <input
                                    accept="video/*"
                                    type="file"
                                    style={{ display: "none" }}
                                    onChange={this.handleState}
                                    id="contained-button-file"
                                    required
                                />
                            </form>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <label htmlFor="contained-button-file">
                                <UploadButton />
                            </label>

                            <label
                                htmlFor="contained-link"
                                onClick={this._onAddLinkButtonClick}
                            >
                                <YTFormDialog />
                            </label>

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.handleSubmit}
                            >
                                Process
                            </Button>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Paper>
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

export default VideoFR;
