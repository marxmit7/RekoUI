import React from "react";
import VideoFR from "./VideoFR/VideoFR";
import YouTubeProcessing from "./YouTube/YouTubeProcess";
import Paper from "@material-ui/core/Paper";
class VideoMethodTabs extends React.Component {
    render() {
        return (
            <div>
                <Paper>
                    <br /> Video Porcessing
                    <VideoFR />
                    <br />{" "}
                </Paper>
                <br />
                <Paper>
                    <br />
                    YouTube Video Processing
                    <YouTubeProcessing />
                </Paper>
            </div>
        );
    }
}

export default VideoMethodTabs;
