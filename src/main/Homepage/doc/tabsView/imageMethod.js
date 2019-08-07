import React from "react";
import FaceReckognition from "./ImageFR/FaceReckognition";
import NSFWAPIs from "./NSFW/NSFW";
import SimilarFace from "./SimilarFace/SimilarFace";
import Paper from "@material-ui/core/Paper";

class ImageMethodTabs extends React.Component {
    render() {
        return (
            <div>
                <Paper>
                    {" "}
                    <br />
                    <h2>Face Recognition</h2>
                    <FaceReckognition />
                    <br />
                </Paper>
                <br /> <br /> <br />
                <Paper>
                    <br />
                    <h2>Similar Face Search</h2>
                    <SimilarFace />
                    <br />
                </Paper>
                <br /> <br /> <br />
                <Paper>
                    <br />
                    <h2> NSFW Classifier</h2>
                    <NSFWAPIs />
                    <br />
                </Paper>
            </div>
        );
    }
}

export default ImageMethodTabs;
