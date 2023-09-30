import React from 'react'
import NewsCard from './NewsCard';

function News(props) {

  // // let imgUrl, title, content, url;
  // let articles;
  // const getNews = async () => {
  //   const api = "https://newsapi.org/v2/everything?q=India&apiKey=330e87d7b7a04229acbf2a4de862c4e0";
  //   try {

  //     const api = await fetch(api);
  //     const response  = await api.json();
  //     let articles = Array.from(response.articles);
  //   } 
  //   catch (error) {
  //     console.log("Unable to fetch news");
  //   }
  // }

  // getNews();
  let articles = [
    {
      source: {
        "id": "wired",
        "name": "Wired"
      },
      author: "Parth M.N.",
      title: "Instagram Posts About a 17th-Century King Are Getting People Arrested",
      description: "Right-wing groups in India are policing social media and reporting minorities for allegedly offending their religion.",
      url: "https://www.wired.com/story/instagram-posts-about-aurangzeb-are-getting-people-arrested/",
      urlToImage: "https://media.wired.com/photos/64b1aeff2cc57777ec67f264/191:100/w_1280,c_limit/071123-business-india-instagram-aurangzeb-arrest.jpg",
      publishedAt: "2023-07-17T06:00:00Z",
      content: "Shafiq Bagwan was hanging out with a few friends in his village of Hasnabad, which is in the Maharashtra state in western India, when he opened Instagram on his phone and saw that his younger brother… [+3193 chars]"
    },
    {
      source: {
        "id": "bbc-news",
        "name": "BBC News"
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Did India let down the maharajahs?",
      description: "On the eve of Indian independence in 1947, India's 562 princes ruled over a third of its population.",
      url: "https://www.bbc.co.uk/news/world-asia-india-66370541",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/0040/production/_130646000_gettyimages-3162323-594x594.jpg",
      publishedAt: "2023-08-06T00:41:23Z",
      content: "They lived in fairy-tale palaces, amassed untold fortunes in diamonds and precious stones, maintained fleets of Rolls-Royces, and travelled in specially appointed train carriages, arriving in the cap… [+6421 chars]"
    },
    {
      source: {
        "id": null,
        "name": "The Economist"
      },
      author: "The Economist",
      title: "Politics",
      description: "The world this week",
      url: "https://www.economist.com/the-world-this-week/2023/07/20/politics",
      urlToImage: "https://www.economist.com/img/b/1280/720/90/media-assets/image/20230722_WWP002.jpg",
      publishedAt: "2023-07-20T13:21:30Z",
      content: "Thailands parliament again voted to prevent Pita Limjaroenrat from becoming prime minister. Coupled with a court ruling that suspended the opposition leader from the legislature, Mr Pita now has no c… [+6099 chars]"
    },
    {
      source: {
        "id": null,
        "name": "NPR"
      },
      author: "The Associated Press",
      title: "India's Parliament reinstates opposition leader Rahul Gandhi as a lawmaker",
      description: "The reinstatement comes ahead of a no-confidence vote against Prime Minister Narendra Modi. The Supreme Court has stayed the defamation conviction that led to Gandhi's ouster from Parliament.",
      url: "https://www.npr.org/2023/08/07/1192481362/india-rahul-gandhi-parliament-modi",
      urlToImage: "https://media.npr.org/assets/img/2023/08/07/ap23219271462549_wide-041f9a24329ab2d54fd51f0186b0a317d45316af-s1400-c100.jpg",
      publishedAt: "2023-08-07T15:55:16Z",
      content: "India's top opposition leader Rahul Gandhi, center, arrives at the Parliament in New Delhi, India, Monday. India's Parliament reinstated Gandhi as a lawmaker three days after the country's top court … [+2583 chars]"
    },
    {
      source: {
        "id": null,
        "name": "NPR"
      },
      author: "The Associated Press",
      title: "India's Parliament reinstates opposition leader Rahul Gandhi as a lawmaker",
      description: "The reinstatement comes ahead of a no-confidence vote against Prime Minister Narendra Modi. The Supreme Court has stayed the defamation conviction that led to Gandhi's ouster from Parliament.",
      url: "https://www.npr.org/2023/08/07/1192481362/india-rahul-gandhi-parliament-modi",
      urlToImage: "https://media.npr.org/assets/img/2023/08/07/ap23219271462549_wide-041f9a24329ab2d54fd51f0186b0a317d45316af-s1400-c100.jpg",
      publishedAt: "2023-08-07T15:55:16Z",
      content: "India's top opposition leader Rahul Gandhi, center, arrives at the Parliament in New Delhi, India, Monday. India's Parliament reinstated Gandhi as a lawmaker three days after the country's top court … [+2583 chars]"
    },
    {
      source: {
        "id": null,
        "name": "NPR"
      },
      author: "The Associated Press",
      title: "India's Parliament reinstates opposition leader Rahul Gandhi as a lawmaker",
      description: "The reinstatement comes ahead of a no-confidence vote against Prime Minister Narendra Modi. The Supreme Court has stayed the defamation conviction that led to Gandhi's ouster from Parliament.",
      url: "https://www.npr.org/2023/08/07/1192481362/india-rahul-gandhi-parliament-modi",
      urlToImage: "https://media.npr.org/assets/img/2023/08/07/ap23219271462549_wide-041f9a24329ab2d54fd51f0186b0a317d45316af-s1400-c100.jpg",
      publishedAt: "2023-08-07T15:55:16Z",
      content: "India's top opposition leader Rahul Gandhi, center, arrives at the Parliament in New Delhi, India, Monday. India's Parliament reinstated Gandhi as a lawmaker three days after the country's top court … [+2583 chars]"
    },
    {
      source: {
        "id": null,
        "name": "NPR"
      },
      author: "The Associated Press",
      title: "India's Parliament reinstates opposition leader Rahul Gandhi as a lawmaker",
      description: "The reinstatement comes ahead of a no-confidence vote against Prime Minister Narendra Modi. The Supreme Court has stayed the defamation conviction that led to Gandhi's ouster from Parliament.",
      url: "https://www.npr.org/2023/08/07/1192481362/india-rahul-gandhi-parliament-modi",
      urlToImage: "https://media.npr.org/assets/img/2023/08/07/ap23219271462549_wide-041f9a24329ab2d54fd51f0186b0a317d45316af-s1400-c100.jpg",
      publishedAt: "2023-08-07T15:55:16Z",
      content: "India's top opposition leader Rahul Gandhi, center, arrives at the Parliament in New Delhi, India, Monday. India's Parliament reinstated Gandhi as a lawmaker three days after the country's top court … [+2583 chars]"
    },
    {
      source: {
        "id": null,
        "name": "NPR"
      },
      author: "The Associated Press",
      title: "India's Parliament reinstates opposition leader Rahul Gandhi as a lawmaker",
      description: "The reinstatement comes ahead of a no-confidence vote against Prime Minister Narendra Modi. The Supreme Court has stayed the defamation conviction that led to Gandhi's ouster from Parliament.",
      url: "https://www.npr.org/2023/08/07/1192481362/india-rahul-gandhi-parliament-modi",
      urlToImage: "https://media.npr.org/assets/img/2023/08/07/ap23219271462549_wide-041f9a24329ab2d54fd51f0186b0a317d45316af-s1400-c100.jpg",
      publishedAt: "2023-08-07T15:55:16Z",
      content: "India's top opposition leader Rahul Gandhi, center, arrives at the Parliament in New Delhi, India, Monday. India's Parliament reinstated Gandhi as a lawmaker three days after the country's top court … [+2583 chars]"
    },
    {
      source: {
        "id": null,
        "name": "NPR"
      },
      author: "The Associated Press",
      title: "India's Parliament reinstates opposition leader Rahul Gandhi as a lawmaker",
      description: "The reinstatement comes ahead of a no-confidence vote against Prime Minister Narendra Modi. The Supreme Court has stayed the defamation conviction that led to Gandhi's ouster from Parliament.",
      url: "https://www.npr.org/2023/08/07/1192481362/india-rahul-gandhi-parliament-modi",
      urlToImage: "https://media.npr.org/assets/img/2023/08/07/ap23219271462549_wide-041f9a24329ab2d54fd51f0186b0a317d45316af-s1400-c100.jpg",
      publishedAt: "2023-08-07T15:55:16Z",
      content: "India's top opposition leader Rahul Gandhi, center, arrives at the Parliament in New Delhi, India, Monday. India's Parliament reinstated Gandhi as a lawmaker three days after the country's top court … [+2583 chars]"
    },
    {
      source: {
        "id": null,
        "name": "NPR"
      },
      author: "The Associated Press",
      title: "India's Parliament reinstates opposition leader Rahul Gandhi as a lawmaker",
      description: "The reinstatement comes ahead of a no-confidence vote against Prime Minister Narendra Modi. The Supreme Court has stayed the defamation conviction that led to Gandhi's ouster from Parliament.",
      url: "https://www.npr.org/2023/08/07/1192481362/india-rahul-gandhi-parliament-modi",
      urlToImage: "https://media.npr.org/assets/img/2023/08/07/ap23219271462549_wide-041f9a24329ab2d54fd51f0186b0a317d45316af-s1400-c100.jpg",
      publishedAt: "2023-08-07T15:55:16Z",
      content: "India's top opposition leader Rahul Gandhi, center, arrives at the Parliament in New Delhi, India, Monday. India's Parliament reinstated Gandhi as a lawmaker three days after the country's top court … [+2583 chars]"
    },
    {
      source: {
        "id": null,
        "name": "NPR"
      },
      author: "The Associated Press",
      title: "India's Parliament reinstates opposition leader Rahul Gandhi as a lawmaker",
      description: "The reinstatement comes ahead of a no-confidence vote against Prime Minister Narendra Modi. The Supreme Court has stayed the defamation conviction that led to Gandhi's ouster from Parliament.",
      url: "https://www.npr.org/2023/08/07/1192481362/india-rahul-gandhi-parliament-modi",
      urlToImage: "https://media.npr.org/assets/img/2023/08/07/ap23219271462549_wide-041f9a24329ab2d54fd51f0186b0a317d45316af-s1400-c100.jpg",
      publishedAt: "2023-08-07T15:55:16Z",
      content: "India's top opposition leader Rahul Gandhi, center, arrives at the Parliament in New Delhi, India, Monday. India's Parliament reinstated Gandhi as a lawmaker three days after the country's top court … [+2583 chars]"
    },
    {
      source: {
        "id": null,
        "name": "NPR"
      },
      author: "The Associated Press",
      title: "India's Parliament reinstates opposition leader Rahul Gandhi as a lawmaker",
      description: "The reinstatement comes ahead of a no-confidence vote against Prime Minister Narendra Modi. The Supreme Court has stayed the defamation conviction that led to Gandhi's ouster from Parliament.",
      url: "https://www.npr.org/2023/08/07/1192481362/india-rahul-gandhi-parliament-modi",
      urlToImage: "https://media.npr.org/assets/img/2023/08/07/ap23219271462549_wide-041f9a24329ab2d54fd51f0186b0a317d45316af-s1400-c100.jpg",
      publishedAt: "2023-08-07T15:55:16Z",
      content: "India's top opposition leader Rahul Gandhi, center, arrives at the Parliament in New Delhi, India, Monday. India's Parliament reinstated Gandhi as a lawmaker three days after the country's top court … [+2583 chars]"
    }
  ]
  return (

    <>
      <div className="container-fluid mt-5 flex-wrap d-flex justify-content-evenly">
        {articles.map((article) => (
          <NewsCard key={article.url}
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

export default News