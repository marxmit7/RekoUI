import React from "react";
import FaceReckognition from "./ImageFR/FaceReckognition";
import NSFWAPIs from "./NSFW/NSFW";
import SimilarFace from "./SimilarFace/SimilarFace";

class ImageMethodTabs extends React.Component {
    render() {
        return (
            <div>
                <FaceReckognition />
                <br />
                <NSFWAPIs />
                <br/>
                <SimilarFace/>
            </div>
        );
    }
}

export default ImageMethodTabs;
