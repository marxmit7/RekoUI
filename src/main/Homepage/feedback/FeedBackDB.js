import "./index.css";
import axios from "axios";

const API_URL = "http://localhost:8000";

export default class FeedBackService  {
    constructor(){}

    getFBList() {
        const url = `${API_URL}/api/feedback/`;
        return axios.get(url).then(response => response.data);
    }
}
