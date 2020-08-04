import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Lay from "./components/layout";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lay></Lay>
        <Main></Main>
      </div>
    );
  }
}

export default App;
