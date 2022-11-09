import React from 'react'
// import { Link } from 'react-router-dom'

const NewsItems = (props)=> {
  
    let {title, description, imageUrl, newsUrl, author, date, source} = props
    return (
      <div>
        <div className="card" >
            <img src={!imageUrl? 'https://images.moneycontrol.com/static-mcnews/2022/10/twitter-musk-rtr-1-770x433.jpg': imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <span className="position-absolute z-1 top-0 translate-middle badge rounded-pill bg-success" style={{left: "90%", zIndex: "1"}}>       {source.name}
                </span>
                <h5 className="card-title text-success">{title}  ...</h5>
                <p className="card-text">{description}  ...</p>
                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-outline-info">Read...</a>
            </div>
        </div>
      </div>
    )
    
}

export default NewsItems
