import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import FeedBackService from "./FeedBackDB";
const postFBservice = new FeedBackService();

export class DividerMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: null
        };
        this.handleUpvoteClick = this.handleUpvoteClick.bind(this);
        this.handleDownvoteClick = this.handleDownvoteClick.bind(this);
    }

    handleUpvoteClick(valueSent) {
        const dataToBeSent = {
            id: valueSent.id,
            suggestedName: valueSent.suggestedName,
            upvote: valueSent.upvote + 1,
            downvote: valueSent.downvote,
            feedback: valueSent.feedback
        };
        // console.log(dataToBeSent);
        postFBservice.postFeedbackList(dataToBeSent);
    }
    handleDownvoteClick(valueSent) {
        const dataToBeSent = {
            id: valueSent.id,
            suggestedName: valueSent.suggestedName,
            upvote: valueSent.upvote + -1,
            downvote: valueSent.downvote,
            feedback: valueSent.feedback
		};
		console.log(dataToBeSent);
    }

    componentWillMount() {
        this.setState({ contents: this.props.data });
    }

    render() {
        // const someData = [{"id":18,"suggestedName":"Bill Gates","upvote":0,"downvote":0,"feedback":"6c2c99a1-6510-4584-9c05-6b87d4106565"},{"id":19,"suggestedName":"Bill Gates","upvote":0,"downvote":0,"feedback":"6c2c99a1-6510-4584-9c05-6b87d4106565"}];
        // const testdata = JSON.parse(JSON.stringify( this.state.contents))
        // console.log(this.state.contents.length)
        const receivedData = this.state.contents;

        return (
            <div>
                <List>
                    {receivedData.map(out => (
                        <ListItem key={out.id}>
                            <ListItemAvatar>
                                <IconButton
                                    onClick={() => this.handleUpvoteClick(out)}
                                >
                                    {" "}
                                    <Icon>thumb_up</Icon>
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText
                                primary={out.suggestedName}
                                secondary=" "
                            />
                            <ListItemAvatar>
                                <IconButton
                                    onClick={() =>
                                        this.handleDownvoteClick(out)
                                    }
                                >
                                    {" "}
                                    <Icon>thumb_down</Icon>
                                </IconButton>
                            </ListItemAvatar>
                            <Divider variant="inset" />
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

export default DividerMain;
