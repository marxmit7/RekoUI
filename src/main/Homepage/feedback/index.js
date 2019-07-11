import React, { Component } from "react";
import FeedBackService from "./FeedBackDB";
const fbservice = new FeedBackService();

// https://djangobook.com/advanced-models/
class FeedBack extends Component {
    constructor(props) {
        super(props);

        this.state = {
            EmbeddingContents: [
                { id: null, title: null, fileurl: null, created_on: null }
            ],
            test:[{data:null,}],
        };
    }

    componentDidMount() {
        fbservice.getEmeddingList().then(result => {
            this.setState({ EmbeddingContents: result.data });
        });
        fbservice.getFeedbackList().then(result => {
            this.setState({ test: result.data });
        });
    }

    render() {
        const EmbeddingContents = this.state.EmbeddingContents;
        let randomIndex = Math.floor(Math.random() * EmbeddingContents.length);
        let indexId = EmbeddingContents[randomIndex]["id"];
        // console.log(indexId, EmbeddingContents[randomIndex]);
        console.log(this.state.test.data,this.state.test.fileurl);

        return <div> feedback {indexId}</div>;
    }
}

export default FeedBack;
