import React, { Component } from "react";
import NestedGrid from "./utils//grid/NestedGrid";
import "./index.css";

class CoreBody extends React.Component {
    render() {
        return (
			<div>
				<NestedGrid />
            </div>
        );
    }
}

export default CoreBody;
