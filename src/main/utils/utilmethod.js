import React, { Component } from "react";
import axios from "axios";

class TestApi extends Component {
    state = {
        file:null
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleImageChange = (e) => {
        this.setState({
          file: e.target.files[0]
        })
      };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        let form_data = new FormData();
        form_data.append("file", this.state.file);
        let url = "http://localhost:8000/api/image/";
        axios
            .post(url, form_data, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <input
                            type="file"
                            id="image"
                            accept="image/png, image/jpeg"
                            onChange={this.handleImageChange}
                            required
                        />
                    </p>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export { TestApi };
