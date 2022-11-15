import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title, description , imgUrl, url,source,color}=this.props;
    return (
      
      <div className='mb-4 '>
            <div className="card  " >
            <span className={`position-absolute top-0 start-90 translate-middle badge rounded-pill bg-success `} style={{zIndex: '1', left:'90%', }}>{source}</span>
            <img src={imgUrl} className="card-img-top" style={{width: '100%', height: '250px'}} alt="..."/>
            <div className="card-body">
            <h5  className="card-title">{title} ...</h5>
            <p className="card-text">{description} ....</p>
            <a href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
      
    )
  }
}
