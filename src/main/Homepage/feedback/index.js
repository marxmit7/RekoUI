import React, { Component } from "react";
import FeedBackService from "./FeedBackDB";
const fbservice = new FeedBackService();

// https://djangobook.com/advanced-models/
class FeedBack extends Component {
    constructor(props) {
        super(props);

        this.state = {
            EmbeddingContents: [{ id: "", title: "", fileurl: "", created_on: "" }]

        };
    }

    componentDidMount() {
        fbservice.getEmeddingList().then(result => {
            this.setState({ EmbeddingContents: result.data });
        }
        );

    }

    render() {
        const EmbeddingContents = this.state.EmbeddingContents;
        let randomIndex = Math.floor(Math.random() * EmbeddingContents.length);
        let indexId = EmbeddingContents[randomIndex]["id"];
        console.log(indexId,EmbeddingContents[randomIndex]);

        return (
            <div> feedback {indexId}</div>
        )
    }
}

export default FeedBack;
