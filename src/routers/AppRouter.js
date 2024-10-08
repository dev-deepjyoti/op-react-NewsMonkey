import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import News from "../components/News";
import PageNotFound from "../components/PageNotFound";
import LoadingBar from "react-top-loading-bar";

export default class AppRouter extends Component {
  newsApiKey = process.env.REACT_APP_NEWS_API;
  pageSize = 6;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={this.pageSize}
                apiKey={this.newsApiKey}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                key="business"
                pageSize={this.pageSize}
                apiKey={this.newsApiKey}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={this.pageSize}
                apiKey={this.newsApiKey}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                key="health"
                pageSize={this.pageSize}
                apiKey={this.newsApiKey}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                key="science"
                pageSize={this.pageSize}
                apiKey={this.newsApiKey}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                key="sports"
                pageSize={this.pageSize}
                apiKey={this.newsApiKey}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
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
