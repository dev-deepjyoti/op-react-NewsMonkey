import "./App.css";
import React, { Component } from "react";
import AppRouter from "./routers/AppRouter";

export default class App extends Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}
