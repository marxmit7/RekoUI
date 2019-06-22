import React, { Component } from "react";
import "./index.css";
import EmbedService from "./result";

const embedservice = new EmbedService();

class EmbedNow extends Component {
    constructor(props) {
        super(props);

        this.state = {
			contents: [],
			id_name:[],
			file_url:[],

        };
    }

    componentDidMount() {
        // var  self  =  this;
        embedservice
            .getEmbeddingsList()
            .then(result => {
                let contents = result.data.map(cloudData => {
					// console.log((cloudData));
					return (<div>{cloudData.id}</div>);
                    // return <div > {JSON.stringify(cloudData, null, 2)}</div>;
                });
                this.setState({ contents: contents });
                console.log("state", this.state.contents);
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
			<div>
			{this.state.contents}


                <div>
                    <img width="100" />
                </div>
            </div>
        );
    }
}

export default EmbedNow;
