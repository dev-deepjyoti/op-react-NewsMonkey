import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    try {
      let curl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
      let data = await fetch(curl);
      props.setProgress(40);
      let parsedData = await data.json();
      props.setProgress(70);
      console.log(parsedData);

      //setState--------
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      //setState--------

      props.setProgress(100);
    } catch (error) {
      console.log("Fetch Failed", error);
      props.setProgress(0);
    }
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}-NewsMonkey`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    let curl = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&pageSize=${
      props.pageSize
    }&page=${page + 1}`;
    setPage(page + 1);
    let data = await fetch(curl);
    let parsedData = await data.json();
    console.log(parsedData);

    //setState
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    //setState
  };
  return (
    <>
      <h2 className="text-center" style={{ marginTop: "90px" }}>
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        //hasMore={articles.length !== totalResults}
        hasMore={page < Math.ceil(totalResults / props.pageSize)}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

// default prop if props is not passed
News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};

//props datatype
News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
};

export default News;
