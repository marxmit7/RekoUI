import "./index.css";
import axios from "axios";
import {BASEURL}  from "../../../constant";

const API_URL = BASEURL;

export default class EmbedService  {
    constructor(){}

    getEmbeddingsList() {
        const url = `${API_URL}/api/embed/`;
        return axios.get(url).then(response => response.data);
    }
}
