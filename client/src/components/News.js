import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

function News(props) {
  const [articles, setArticles] = useState([]);

  const getNews = async () => {
    let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=9cb5f2027b8c4cf7aad0b28295ca669b`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.log("Unable to fetch news");
    }
  }

  useEffect(() => {
    getNews()
  })

  return (
    <>
      <div className="container-fluid mt-5 flex-wrap d-flex justify-content-evenly">
        {articles.map((article, index) => (
          <NewsCard 
            key={index}
            title={article.title}
            urlToImage={article.urlToImage}
            url={article.url}
            description={article.description}
          />
        ))}
      </div>
    </>
  )
}

export default News;
