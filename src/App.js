import React, { Fragment } from "react";

import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { UsersDisplay } from "./components/UsersDisplay/UsersDisplay.jsx ";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isListView: true,
    };
    this.onLayoutToggle = this.onLayoutToggle.bind(this);
  }

  onLayoutToggle() {
    this.setState({
      isListView: !this.state.isListView,
    });
  }

  render() {
    return (
      <Fragment>
        <Header
          isListView={this.state.isListView}
          onLayoutToggle={this.onLayoutToggle}
        />
        <UsersDisplay isListView={this.state.isListView} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
