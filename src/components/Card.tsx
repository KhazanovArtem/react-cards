import React from 'react'

export interface CardType {
    isImage : boolean;
    title: string;
    article: string;
  }

export const Card: React.FC<CardType> = (props) => {
const {isImage, title, article} = props
  return (
    <div className="card" style={{width: '18rem'}}>
        {isImage ? <img src="..." className="card-img-top" alt="..."></img> : null}
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{article}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}
