import "./index.css";
import axios from "axios";

const API_URL = "http://localhost:8000";

export default class FeedBackService {
    constructor() {}

    getEmeddingList() { // Get the list of faceid
        const url = `${API_URL}/api/faceid/`;
        return axios.get(url).then(response => response.data);
    }
    getFeedbackList() { //get the info saved in feedback table
        const url = `${API_URL}/api/feedback/`;
        return axios.get(url).then(response => response);
    }
    postFeedbackList(postedValue) { //post to update or add suggested name in feedback feature
        const url = `${API_URL}/api/feedback/`;
        let form_data = new FormData();
        form_data.append("data", JSON.stringify(postedValue));
        return axios.post(url, form_data, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
    }
}
