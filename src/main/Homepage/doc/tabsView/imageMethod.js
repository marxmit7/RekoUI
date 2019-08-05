import React from "react";
import FaceReckognition from "./ImageFR/FaceReckognition";
import NSFWAPIs from "./NSFW/NSFW";
import SimilarFace from "./SimilarFace/SimilarFace";

class ImageMethodTabs extends React.Component {
    render() {
        return (
            <div>Face Recognition
                <FaceReckognition />
                <br /> <br /> <br /> <br />
                NSFW
                <NSFWAPIs />
                <br /> <br /> <br /> <br />
                Similar Face Search
                <SimilarFace />
            </div>
        );
    }
}

export default ImageMethodTabs;
