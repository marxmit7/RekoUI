import React from "react";
import Paper from "@material-ui/core/Paper";
function RetinaFaceImageFRView(props) {
    return (
        <Paper>
            <div style={{ textAlign: "center" }}>
                {props.filetext}
                <img height="400" src={props.preview} />
            </div>
        </Paper>
    );
}

export default RetinaFaceImageFRView;
