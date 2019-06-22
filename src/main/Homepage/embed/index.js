import React, { Component } from "react";
import "./index.css";
import EmbedService from "./result";
import ImgMediaCard from "./card"



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
                {contents.map(data => {
                    console.log(data.id, data.fileurl);
                    // eslint-disable-next-line no-unused-expressions
                    return (
                        <div key={data.id}>
                            <div>
                            <ImgMediaCard data={data} />
                            <br></br>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default EmbedNow;
