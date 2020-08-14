import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Beauty from "./pages/beauty";
import lly from "./components/layout";
import Event from "./pages/event";
import Service from "./pages/home-services";
import More from "./pages/more";
import Tailor from "./pages/tailor";
import Signup from "./pages/signup";
import Login from "./pages/login";

{
  /**import * as serviceWorker from "./serviceWorker";*/
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/beauty" component={Beauty} />
      <Route exact path="/event" component={Event} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/more" component={More} />
      <Route exact path="/tailor" component={Tailor} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
{
  /**serviceWorker.unregister();*/
}
