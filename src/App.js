import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    const newsApiKey = "9af0317e1b6547e0b370fceeaacd1c9f";
    return (
      <div>
        <Navbar />
        <News pageSize={6} apiKey={newsApiKey} />
      </div>
    );
  }
}
