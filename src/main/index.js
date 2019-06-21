import React, { Component } from "react";
import NestedGrid from "./HomeGrid/NestedGrid";
import "./index.css";

class CoreBody extends Component {
    render() {
        return (
            <div>
                <NestedGrid />
            </div>
        );
    }
}

export default CoreBody;
