import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import News from "../components/News";
import PageNotFound from "../components/PageNotFound";

export default class AppRouter extends Component {
  newsApiKey = "9af0317e1b6547e0b370fceeaacd1c9f"; // My api
  pageSize = 6;

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                key="general"
                pageSize={this.pageSize}
                apiKey={this.newsApiKey}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                pageSize={this.pageSize}
                apiKey={this.newsApiKey}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                pageSize={this.pageSize}
                apiKey={this.newsApiKey}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News
                key="health"
                pageSize={this.pageSize}
                apiKey={this.newsApiKey}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                pageSize={this.pageSize}
                apiKey={this.newsApiKey}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                key="sports"
                pageSize={this.pageSize}
                apiKey={this.newsApiKey}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                pageSize={this.pageSize}
                apiKey={this.newsApiKey}
                country="in"
                category="technology"
              />
            </Route>
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
