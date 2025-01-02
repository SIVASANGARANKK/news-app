import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Newsitem from "./Newsitem";  

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);
  const topic = "Machine Learning(AI)";

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <div className="bg-dark">
      <h2 className="card bg-dark text-light text-center mb-0">
        AI LAB <span className="badge bg-danger">Computer Science and Engineering</span>
      </h2>
      <Carousel>
        {articles.map((news, index) => (
          <Carousel.Item key={index}>
            <Newsitem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default NewsBoard;
