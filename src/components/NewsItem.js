import React, { Component } from "react";
import noimage from "../assets/img/no-image.jpeg";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ height: "35rem" }}>
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "80%", zIndex: "1" }}
          >
            <small> {source}</small>
          </span>
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
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {date ? new Date(date).toUTCString() : "Date unknown"}
              </small>
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
