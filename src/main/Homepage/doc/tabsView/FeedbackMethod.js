import React from "react";
import FeedbackNow from "./FeedBack/Feedback";
import Paper from "@material-ui/core/Paper";

class FeedbackMethodTabs extends React.Component {
    render() {
        return (
            <div>
                {" "}
                <Paper>
                    <br />
                    <h2> Feedback </h2>
                    <FeedbackNow />
                    <br />
                </Paper>
            </div>
        );
    }
}

export default FeedbackMethodTabs;
