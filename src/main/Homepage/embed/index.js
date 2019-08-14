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
            contents: null
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
        const renderThis =
            contents !== null
                ? contents.map(data => {
                      return (
                          <div
                              style={{ display: "inline-block" }}
                              key={data.id}
                          >
                              <div style={{ padding: "5px" }}>
                                  <ImgMediaCard data={data} />
                              </div>
                          </div>
                      );
                  })
                : null;

        return (
            <div>
                <EmbdeFormDialog />
                {renderThis}
            </div>
        );
    }
}

export default EmbedNow;
