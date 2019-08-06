import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
    RequestContents,
    ResponseContents,
    CurlContents,
    PythonContents,
    NodeContents
} from "./TabContents";

class SnippetTab extends React.Component {
    constructor(props) {
        super();
        this.state = {
            // Takes active tab from props if it is defined there
            activeTab: props.activeTab || 1
        };

        // Bind the handleSelect function already here (not in the render function)
        this.handleSelect = this.handleSelect.bind(this);
    }

    render() {
        return (
            <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
                <Tab eventKey={1} title="Curl">
                    <CurlContents/>
                </Tab>
                <Tab eventKey={2} title="Python">
                    <PythonContents/>
                </Tab>
                <Tab eventKey={3} title="Node" disabled>
                    <NodeContents/>
                </Tab>
            </Tabs>
        );
    }

    handleSelect(selectedTab) {
        // The active tab must be set into the state so that
        // the Tabs component knows about the change and re-renders.
        this.setState({
            activeTab: selectedTab
        });
    }
}

class ReqRes extends React.Component {
    constructor(props) {
        super();
        this.state = {
            // Takes active tab from props if it is defined there
            activeTab: props.activeTab || 1
        };

        // Bind the handleSelect function already here (not in the render function)
        this.handleSelect = this.handleSelect.bind(this);
    }

    render() {
        return (
            <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
                <Tab eventKey={1} title="Request">
                    <RequestContents />
                </Tab>
                <Tab eventKey={2} title="Response">
                    <ResponseContents />
                </Tab>
            </Tabs>
        );
    }

    handleSelect(selectedTab) {
        // The active tab must be set into the state so that
        // the Tabs component knows about the change and re-renders.
        this.setState({
            activeTab: selectedTab
        });
    }
}
export { SnippetTab, ReqRes };
