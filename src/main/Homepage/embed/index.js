import React, { Component } from "react";
import "./index.css";
import axios from "axios";
import EmbedService from "./result";

const  embedservice  =  new  EmbedService();

class EmbedNow extends Component {

    constructor(props) {
		super(props)

		this.state = {
			response:null
		}
	}

	componentDidMount() {
		var  self  =  this;
		embedservice.getEmbeddingsList().then(function (result) {
			self.setState({ response:  result.data})
		});
	}

    render() {
        return (
            <div>
				{JSON.stringify(this.state.response,null,2)}
            </div>
        );
    }
}

export default EmbedNow;
