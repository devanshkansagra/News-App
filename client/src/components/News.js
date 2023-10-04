import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

function News(props) {
  const [articles, setArticles] = useState([]);

  let [search, setsearch] = useState("");

  function handleSearch(e) {
    search = e.target.value;
    setsearch(search);
  } 

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
      <h1 className="text-center mt-4">DailyScope News</h1>
      <div className="container my-3">
        <form className="d-flex" role="search" onSubmit={getNews}>
          <input className="form-control me-2" type="search" placeholder="Search latest topics" aria-label="Search" value={search} onChange={handleSearch}/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
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
