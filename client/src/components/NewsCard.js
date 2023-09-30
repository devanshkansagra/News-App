import React from 'react'

function NewsCard(props) {
  return (
    <>
      <div className="card dev-card mt-5">
        <img src={props.urlToImage} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.url} className="btn btn-primary">Read More</a>
          </div>
      </div>
    </>
  )
}

export default NewsCard