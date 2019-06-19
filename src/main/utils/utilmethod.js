import React, { Component } from "react";
import axios from "axios";

class App extends Component {
    state = {
        id: "",
        title: "",
        created_on: ""
        // image: null
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        let form_data = new FormData();
        form_data.append("title", this.state.title);
        let url = "http://localhost:8000/api/test/";
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
                            type="text"
                            placeholder="Title"
                            id="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            required
                        />
                    </p>

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

export default App;
