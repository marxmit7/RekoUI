import React from 'react'
import Paper from "@material-ui/core/Paper";

function SimFaceView(props) {
	return (
        <Paper>
            <div style={{ textAlign: "center" }}>
				<img height="250" src={props.refImage} />
				<img height="250" src={props.comImage} />
            </div>
        </Paper>
	)
}

export default SimFaceView;
