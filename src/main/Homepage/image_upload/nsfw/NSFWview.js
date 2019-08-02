import React from 'react'
import Paper from "@material-ui/core/Paper";

function NSFWview(props) {
    return (

        <Paper>
            <div style={{ textAlign: "center" }}>
                <img height="400" src={props.NSFWprops} />
            </div>
        </Paper>
    );
}


export default NSFWview
