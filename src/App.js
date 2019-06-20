import React, { Component } from "react";
// import axios from "axios";
import NavBar from "./header/index";
import CoreBody from "./main/index";

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                    <CoreBody />
                </div>

            </div>
        );
    }
}

export default App;
