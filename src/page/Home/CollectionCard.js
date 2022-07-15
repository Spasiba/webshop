import React from 'react'
import {Link} from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const CollectionCard = ({title,img}) => {
  return (
    <div className="card">
      <Link to={'/shop'}>
        <LazyLoadImage
        alt="clothes"
        src={img}
        effect="blur"
        />
      </Link>
        <p className="card__title">{title}</p>

    </div>
  )
}

export default CollectionCard