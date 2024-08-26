import React, { Component } from "react";
import loading from "../assets/img/loading.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading" width={50} height={50} />
      </div>
    );
  }
}
