import "./index.css";
import axios from "axios";

const API_URL = "http://localhost:8000";

export default class EmbedService  {
    constructor(){}

    getEmbeddingsList() {
        const url = `${API_URL}/api/faceid/`;
        return axios.get(url).then(response => response.data);
    }
}
