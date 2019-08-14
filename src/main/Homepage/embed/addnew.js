import React, { Component } from "react";
import "./index.css";
import axios from "axios";
import BASEURL from "../../../constant";

const API_URL = BASEURL;

export default class EmbedService {
    constructor() {}

    addNewEmbedding() {
        const url = `${API_URL}/api/embed/`;
        let form_data = new FormData();
        form_data.append("file", this.state.file);
        return axios
            .post(url, form_data, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            })
            .then(response => {
                this.setState({
                    resultjson: JSON.stringify(response.data, null, 2)
                });
            })
            .catch(console.log);
    }
}
