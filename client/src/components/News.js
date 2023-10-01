import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

function News() {
  const [articles, setArticles] = useState([]);

  const getNews = async () => {
    let url = "https://newsapi.org/v2/everything?q=India&apiKey=330e87d7b7a04229acbf2a4de862c4e0";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.log("Unable to fetch news");
    }
  }

  useEffect(() => {
    getNews();
  }, []); // empty dependency array to run once on component mount

  return (
    <>
      <div className="container-fluid mt-5 flex-wrap d-flex justify-content-evenly">
        {articles.map((article, index) => (
          <NewsCard 
            key={index} // Use index as key if 'url' is not unique
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
