import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

class VideoMethodTabs extends React.Component {
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
        <Tab eventKey={1} title="Curl">Tab 1 content</Tab>
        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
        <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
        <Tab eventKey={4} title="Tab 4">Tab 4 content is displayed by default</Tab>
        <Tab eventKey={5} title="Tab 5">Tab 5 content</Tab>
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

export default VideoMethodTabs