import React, { Component } from "react";
import FeedBackService from "./FeedBackDB";
const fbservice = new FeedBackService();

// https://djangobook.com/advanced-models/
class FeedBack extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: [
                {
                    id: "",
                    title: "",
                    fileurl: "",
                    created_on: "",
                    upvote: "",
                    downvote: "",
                    suggested: ""
                }
            ]
        };
    }

    componentDidMount() {
        fbservice.getFBList().then(result => {
            this.setState({ contents: result.data });
        });
    }

    render() {
        return <div />;
    }
}

export default FeedBack;
