import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import News from "../components/News";
import PageNotFound from "../components/PageNotFound";
import LoadingBar from "react-top-loading-bar";

const AppRouter = () => {
  const newsApiKey = process.env.REACT_APP_NEWS_API;
  const pageSize = 6;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              apiKey={newsApiKey}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              apiKey={newsApiKey}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              apiKey={newsApiKey}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              apiKey={newsApiKey}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              apiKey={newsApiKey}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              apiKey={newsApiKey}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              apiKey={newsApiKey}
              country="in"
              category="technology"
            />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
