import React from "react";

function YouTubePlayer(props) {
    return (
        <div>
            <iframe
                width="712"
                height="400"
                src= {props.link}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
        </div>
    );
}

export default YouTubePlayer;
