import React, { Component } from "react";
import FeedBackService from "./FeedBackDB";
const fbservice = new FeedBackService();

// https://djangobook.com/advanced-models/
class FeedBack extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: [{ id: "", title: "", fileurl: "", created_on: "" }]
        };
    }

    componentDidMount() {
        fbservice.getFBList().then(result => {
            this.setState({ contents: result.data });
        }
        );

    }

    render() {
        const contents = this.state.contents;
        let randomIndex = Math.floor(Math.random() * contents.length);
        let indexId = contents[randomIndex]["id"];
        console.log(indexId,contents[randomIndex]);

        return (
            <div> feedback {indexId}</div>
        )
    }
}

export default FeedBack;
