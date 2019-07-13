import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";

export class DividerMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: null,
        };
    }

	componentWillMount() {
        this.setState({ contents: this.props.data });
	}


    render() {
		const someData = [{"id":18,"suggestedName":"Bill Gates","upvote":0,"downvote":0,"feedback":"6c2c99a1-6510-4584-9c05-6b87d4106565"},{"id":19,"suggestedName":"Bill Gates","upvote":0,"downvote":0,"feedback":"6c2c99a1-6510-4584-9c05-6b87d4106565"}];
		// const testdata = JSON.parse(JSON.stringify( this.state.contents))
		// console.log(this.state.contents.length)
		console.log(typeof(this.state.contents))

		if(typeof this.props.data !=='undefined')
		{
			console.log("oh no")
			console.log( this.props.data.length)

			this.props.data.map(o => (
				  console.log(o)
				))
		}
        return (
            <div>


				{ someData.map(o => (
					<h4>
					  {o.upvote} {o.suggestedName} {o.downvote}
					</h4>
					))
				}


                <List>
                    <ListItem>
                        <Divider variant="inset" />
                        <ListItemAvatar>
                            <Avatar>
                                <Icon>thumb_up</Icon>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="testing" secondary="" />
                        <ListItemAvatar>
                            <Avatar>
                                <Icon>thumb_down</Icon>
                            </Avatar>
                        </ListItemAvatar>
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default DividerMain;
