import "./App.css";
import React, { Component } from "react";
import AppRouter from "./routers/AppRouter";

// import Navbar from "./components/Navbar";
// import News from "./components/News";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    // const newsApiKey = "9af0317e1b6547e0b370fceeaacd1c9f";
    return (
      <div>
        <AppRouter />
        {/* <Router>
          <Navbar />
          <Switch>
            <Route path="/">
              <News
                pageSize={6}
                apiKey={newsApiKey}
                country="in"
                category="general"
              />
            </Route>
          </Switch>
        </Router> */}
      </div>
    );
  }
}
