import React, { Component } from "react";
import TabContainer from 'react-bootstrap/TabContainer'
import "./index.css";


class Tab extends React.Component {
    render() {
        return (
            <div>
			<div class="col-md-3">
			<ul class="nav nav-pills nav-stacked">
			  <li class="active"><a href="#">Home</a></li>
			  <li><a href="#">Menu 1</a></li>
			  <li><a href="#">Menu 2</a></li>
			  <li><a href="#">Menu 3</a></li>
			</ul>
		  </div>
            </div>
        );
    }
}

export default Tab;
