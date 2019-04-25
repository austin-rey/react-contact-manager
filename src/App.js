import React, { Component } from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <Contacts />
          <div className="container" />
        </div>
      </Provider>
    );
  }
}

export default App;
