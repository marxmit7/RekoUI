import React, { Component } from "react";
import "./index.css";
import EmbedService from "./result";

const embedservice = new EmbedService();

class EmbedNow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: [{ id: "", title: "", fileurl: "", created_on: "" }]
        };
    }

    componentDidMount() {
        embedservice.getEmbeddingsList().then(result => {
            this.setState({ contents: result.data });
        });
    }

    render() {
        const contents = this.state.contents;
        return (
            <div>
				{
					contents.map(data =>
					{
						<h1>{data.id}</h1>
					})
				}
                <div>
                    <img width="100" />
                </div>
            </div>
        );
    }
}

export default EmbedNow;
