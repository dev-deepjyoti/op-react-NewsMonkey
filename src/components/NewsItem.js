import React, { Component } from "react";
import noimage from "../assets/img/no-image.jpeg";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem", height: "30rem" }}>
          <img
            src={imageUrl ? imageUrl : noimage}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title : "Title Missing!"}</h5>
            <p className="card-text">
              {description ? description : "Detail missing"}
            </p>
            <a
              href={url}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}
