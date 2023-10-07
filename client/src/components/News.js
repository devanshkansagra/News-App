import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

function News(props) {
  const [articles, setArticles] = useState([]);

  let [search, setsearch] = useState("");
  let [query, setquery] = useState(null);

  const handleSearch = (e) => {
    search = e.target.value
    setsearch(search);
  }

  const searchQuery = (e) => {
    e.preventDefault();
    query = search;
    setquery(query);
  }

  useEffect(() => {
    const getNews = async () => {
      let url = `https://newsapi.org/v2/everything?q=${query || props.category}&apiKey=330e87d7b7a04229acbf2a4de862c4e0`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.log(error);
      }
    }
    getNews();
  }, [query, props.category]);
  return (
    <>
      <h1 className="text-center mt-4">DailyScope News</h1>
      <div className="container my-3">
        <form className="d-flex" role="search" onSubmit={searchQuery}>
          <input className="form-control me-2" type="search" placeholder="Search latest topics" aria-label="Search" value={search} onChange={handleSearch} />
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

