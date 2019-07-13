import React, { Component } from "react";
import FeedBackService from "./FeedBackDB";
import Maincard from "./cardview";
const fbservice = new FeedBackService();
const API_URL = "http://localhost:8000";
// https://djangobook.com/advanced-models/
class FeedBack extends Component {
    constructor(props) {
        super(props);

        this.state = {
            EmbeddingContents: [
                { id: null, title: null, fileurl: null, created_on: null }
            ],
            test: []
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
        // console.log(this.state.test.data,API_URL+ this.state.test.fileurl);

        return (
            <div>
                <div>

                    <Maincard
                        fileurl={API_URL + this.state.test.fileurl}
                        data={this.state.test.data}
                    />
                </div>
                <div>feedback {indexId}</div>

            </div>
        );
    }
}

export default FeedBack;
