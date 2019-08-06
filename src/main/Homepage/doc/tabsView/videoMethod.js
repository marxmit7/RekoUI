import React from "react";
import VideoFR from "./VideoFR/VideoFR";
import YouTubeProcessing from "./YouTube/YouTubeProcess";

class VideoMethodTabs extends React.Component {
    render() {
        return (
            <div>
            Video Porcessing
                <VideoFR />
                <br /> <br /> <br />
            YouTube Video Processing
                <YouTubeProcessing />
            </div>
        );
    }
}

export default VideoMethodTabs;
