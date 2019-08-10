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

class App extends Component {
    componentDidMount() {
        this.props.onTryAutoSignup();
    }
    render() {
        return (
            <div>
                <div {...this.props}>
                    <BrowserRouter>
                        <NavBar />
                        <Switch>
                            <Route path="/" component={CoreBody} exact />
                            <Route path="/image" component={ImageFR} exact />
                            <Route path="/embed" component={EmbedNow} exact />
                            <Route path="/video" component={VideoFR} exact />
                            <Route
                                path="/feedback"
                                component={FeedBack}
                                exact
                            />
                            <Route path="/doc" component={APIsDOC} exact />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
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
