import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";



class MyProfileView extends Component {
    componentDidMount() {
        console.log("isauthenticated in profile: ", this.props.isAuthenticated);
    }
    render() {
        return (
            <div>
                {" "}
                {this.props.isAuthenticated ?  null: (
                    <div>
                        You're logout please login here{" "}
                        <a href="/login">Login </a>
                    </div>
                )}
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
        onTryAutoSignup: () => dispatch(actions.authCheckState()),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyProfileView);