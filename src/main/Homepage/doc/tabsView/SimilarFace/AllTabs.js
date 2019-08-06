import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import{
    GETRequestContents,
    POSTRequestContents,
    POSTResponseContents,
    GETResponseContents,
    POSTCurlContents,
    POSTPythonContents,
    POSTNodeContents,
    GETCurlContents,
    GETPythonContents,
    GETNodeContents
} from "./TabContents";

class GETSnippetTab extends React.Component {
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
                    <GETCurlContents/>
                </Tab>
                <Tab eventKey={2} title="Python">
                    <GETPythonContents/>
                </Tab>
                <Tab eventKey={3} title="Node" disabled>
                    <GETNodeContents/>
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

class GETReqRes extends React.Component {
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
                    <GETRequestContents />
                </Tab>
                <Tab eventKey={2} title="Response">
                    <GETResponseContents />
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
}class POSTSnippetTab extends React.Component {
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
                    <POSTCurlContents/>
                </Tab>
                <Tab eventKey={2} title="Python">
                    <POSTPythonContents/>
                </Tab>
                <Tab eventKey={3} title="Node" disabled>
                    <POSTNodeContents/>
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

class POSTReqRes extends React.Component {
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
                    <POSTRequestContents />
                </Tab>
                <Tab eventKey={2} title="Response">
                    <POSTResponseContents />
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
export { GETSnippetTab, GETReqRes, POSTReqRes,POSTSnippetTab};
