import React from "react";
import TextField from "@material-ui/core/TextField";
import FeedBackService from "./FeedBackDB";

const postFBservice = new FeedBackService();

export default class NameInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
            isSent: false,
            id: -1,
            suggestedName: null,
            upvote: 0,
            downvote: 0,
            feedback_id: this.props.feedback_id_value
        };
    }
    handleChange = event => {
        this.setState({
            suggestedName: event.target.value
        });
    };

    handleClick = event => {
        if (this.state.isSent === false && this.state.suggestedName!==null) {
            const dataToBeSent = {
                id: this.state.id,
                suggestedName: this.state.suggestedName,
                upvote: this.state.upvote,
                downvote: this.state.downvote,
                feedback_id: this.state.feedback_id
            };
            postFBservice.postFeedbackList(dataToBeSent);

            // console.log(dataToBeSent);

            this.setState({
                isSent: true
            });
        } else {
            alert("You can't suggest blank or more than 1 name");
        }
    };

    render() {
        return (
            <div style ={{marginLeft:'24px'}}>
                <TextField
                    id="outlined-dense"
                    label="Suggest Name"
                    margin="Suggest Name"
                    variant="outlined"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick} style ={{margin:'10px'}}>Send</button>
            </div>
        );
    }
}
