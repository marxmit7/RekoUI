import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div >
                <Navbar className="gradstyle"  fixed="top">
                    <Navbar.Brand className="aligncenter" >
                        <NavLink to=""> Rekognition </NavLink>
                    </Navbar.Brand>
                </Navbar>
                <br></br>
                <br></br>
                <br></br>

            </div>
        );
    }
}

export default NavBar;
