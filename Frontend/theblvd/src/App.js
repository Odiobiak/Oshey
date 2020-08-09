import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Lay from "./components/layout";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Lay></Lay>
      </div>
    );
  }
}

export default App;
