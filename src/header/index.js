import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar className="gradstyle">
                    <Navbar.Brand className="aligncenter">
                        Rekognition
                    </Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
