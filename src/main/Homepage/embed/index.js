import React, { Component } from "react";
import "./index.css";
import EmbedService from "./EmbedingsList";
import ImgMediaCard from "./card";

// import SearchAppBar from "../../utils/appbar"
// import {AddNewContent} from "./buttons";
import EmbdeFormDialog from "./popdialog";
const embedservice = new EmbedService();

class EmbedNow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: [{ id: "", title: "", fileurl: null, created_on: "" }]
        };
    }

    componentDidMount() {
        embedservice.getEmbeddingsList().then(result => {
            this.setState({ contents: result.data });
        });
        // console.log(this.state.contents)

    }

    render() {
        const contents = this.state.contents;
        // console.log(this.state.contents)

        return (
            <div >
            <EmbdeFormDialog/>
                {contents.map(data => {
                    return (
                        <div style={{ display: "inline-block" }} key = {data.id}>
                            <div style={{ padding: "5px" }}>
                                <ImgMediaCard data={data} />
                            </div>
                        </div>
                    );
                })}

            </div>
        );
    }
}

export default EmbedNow;
