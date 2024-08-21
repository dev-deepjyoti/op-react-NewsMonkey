import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    console.log("construtor");
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 21,
    };
  }

  async componentDidMount() {
    console.log("CDM");
    let curl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9af0317e1b6547e0b370fceeaacd1c9f&pageSize=${this.state.pageSize}&page=${this.state.page}`;

    let data = await fetch(curl);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
    });
  }

  handlePrevClick = async () => {
    let curl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9af0317e1b6547e0b370fceeaacd1c9f&pageSize=${
      this.state.pageSize
    }&page=${this.state.page - 1}`;

    let data = await fetch(curl);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 21)) {
    } else {
      let curl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9af0317e1b6547e0b370fceeaacd1c9f&pageSize=${
        this.state.pageSize
      }&page=${this.state.page + 1}`;
      let data = await fetch(curl);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-sm btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-sm btn-dark"
            onClick={this.handleNextClick}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}
