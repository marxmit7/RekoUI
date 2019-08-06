import React from "react";
import FaceReckognition from "./ImageFR/FaceReckognition";
import NSFWAPIs from "./NSFW/NSFW";
import SimilarFace from "./SimilarFace/SimilarFace";

class ImageMethodTabs extends React.Component {
    render() {
        return (
            <div>
                <h2>Face Recognition</h2>
                <FaceReckognition />
                <br /> <br /> <br /> <br />
                <h2>Similar Face Search</h2>
                <SimilarFace />
                <br /> <br /> <br /> <br />
                <h2> NSFW Classifier</h2>
                <NSFWAPIs />
            </div>
        );
    }
}

export default ImageMethodTabs;
