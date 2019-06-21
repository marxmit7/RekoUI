import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar className="gradstyle">
                    <Navbar.Brand className="aligncenter">
                        <NavLink to=""> Rekognition </NavLink>
                    </Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
