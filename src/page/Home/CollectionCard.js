import React from 'react'

const CollectionCard = ({title,img}) => {
  return (
    <div className="card">
        <img className="card__img" src={img}/>
        <p className="card__title">{title}</p>

    </div>
  )
}

export default CollectionCard