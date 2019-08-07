import React from "react";
import EmbedNow from "./Embed/Embed";
import Paper from "@material-ui/core/Paper";

class EmbedMethodTabs extends React.Component {
    render() {
        return (
            <div>
                {" "}
                <Paper>
                    <br />
                    <h2> Embeddings </h2>
                    <EmbedNow />
                    <br />
                </Paper>
            </div>
        );
    }
}

export default EmbedMethodTabs;
