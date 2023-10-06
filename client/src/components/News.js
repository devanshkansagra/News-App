// import React, { useEffect, useState } from 'react';
// import NewsCard from './NewsCard';

// function News(props) {
//   const [articles, setArticles] = useState([]);

//   let [search, setsearch] = useState("");

//   const handleSearch = (e) => {
//     search = e.target.value
//     setsearch(search);
//   }

//   const getNews = async () => {
//     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=330e87d7b7a04229acbf2a4de862c4e0`;
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setArticles(data.articles);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   // useEffect(() => {
//   //   getNews();
//   // }, [search]);
//   return (
//     <>
//       <h1 className="text-center mt-4">DailyScope News</h1>
//       <div className="container my-3">
//         <form className="d-flex" role="search">
//           <input className="form-control me-2" type="search" placeholder="Search latest topics" aria-label="Search" value={search} onChange={handleSearch} />
//           <button className="btn btn-outline-success" type="submit">Search</button>
//         </form>
//       </div>
//       <div className="container-fluid mt-5 flex-wrap d-flex justify-content-evenly">
//         {articles.map((article, index) => (
//           <NewsCard
//             key={index}
//             title={article.title}
//             urlToImage={article.urlToImage}
//             url={article.url}
//             description={article.description}
//           />
//         ))}
//       </div>
//     </>
//   )
// }

// export default News;
import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

function News(props) {
  const [articles, setArticles] = useState([]);
  let [search, setSearch] = useState("");

  function handleSearch(e) {
    search = e.target.value;
    setSearch(search);
  }

  const getNews = async () => {
    let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=1d3a0eefa97b499d8fbc4ee93eeb40b7`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles); // Ensure data.articles is defined or provide an empty array
    } catch (error) {
      console.log("Unable to fetch news");
    }
  }

  useEffect(() => {
    getNews();
  }); // Re-fetch news when category changes

  return (
    <>
      <h1 className="text-center mt-4">DailyScope News</h1>
      <div className="container my-3">
        <form className="d-flex" role="search" onSubmit={handleSearch}>
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
