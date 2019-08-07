import React from "react";
import VideoFR from "./VideoFR/VideoFR";
import YouTubeProcessing from "./YouTube/YouTubeProcess";
import Paper from "@material-ui/core/Paper";
class VideoMethodTabs extends React.Component {
    render() {
        return (
            <div>
                <Paper>
                    <br />
                   <h2>Video Porcessing</h2>
                    <VideoFR />
                    <br />{" "}
                </Paper>
                <br />
                <Paper>
                    <br />
                   <h2>Steamg Video Processing</h2>
                    <YouTubeProcessing />
                </Paper>
            </div>
        );
    }
}

export default VideoMethodTabs;
