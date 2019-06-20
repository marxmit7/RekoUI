import React, { Component } from "react";
import NavBar from "./header/index";
import CoreBody from "./main/index";
import ImageFR from "./main/Homepage/image_upload/imageUpload.js";
import { BrowserRouter, Route ,Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" component={CoreBody} exact />
                            <Route path="/image" component={ImageFR} exact />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;
