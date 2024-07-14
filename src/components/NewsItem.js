import React from 'react'

const NewsItem = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0
          }}>

            <span className='badge rounded-pill bg-danger'>
              {source}
            </span>
          </div>
          <img src={imageUrl ? imageUrl : "https://c.ndtvimg.com/2024-06/vkqdr5gg_zomato-paytm_625x300_16_June_24.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}
            </h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-primary btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }


export default NewsItem
