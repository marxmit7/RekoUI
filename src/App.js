import React, { Component } from "react";
import NavBar from "./header/index";
import CoreBody from "./main/index";
import ImageFR from "./main/Homepage/image_upload/index";
import EmbedNow from "./main/Homepage/embed/index";
import VideoFR from "./main/Homepage/video_upload/index";
import FeedBack from "./main/Homepage/feedback/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import APIsDOC from "./main/Homepage/doc/index";
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";
import SignIn from "./containers/login";
import SignUp from "./containers/signup";
import MyProfileView from "./containers/profile";

class App extends Component {
    componentDidMount() {
        this.props.onTryAutoSignup();
    }
    render() {
        return (
            <div>
                <div {...this.props}>
                    <BrowserRouter>
                        <NavBar isAuthenticated={this.props.isAuthenticated} />
                        <Switch>
                            <Route
                                path="/"
                                component={() => <CoreBody />}
                                exact
                            />
                            <Route
                                path="/image"
                                component={() => <ImageFR />}
                                exact
                            />
                            <Route
                                path="/embed"
                                component={() => <EmbedNow />}
                                exact
                            />
                            <Route
                                path="/video"
                                component={() => <VideoFR />}
                                exact
                            />
                            <Route
                                path="/feedback"
                                component={() => <FeedBack />}
                                exact
                            />
                            <Route
                                path="/doc"
                                component={() => <APIsDOC />}
                                exact
                            />
                            <Route
                                path="/login"
                                component={() => <SignIn />}
                                exact
                            />
                            <Route
                                path="/register"
                                component={() => <SignUp />}
                                exact
                            />
                            <Route
                                path="/profile"
                                component={() => <MyProfileView />}
                                exact
                            />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: localStorage.getItem("token") !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
