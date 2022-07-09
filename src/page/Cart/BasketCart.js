import React,{useContext, useState} from 'react'
import {CustomContext} from "../../Context";
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'


const BasketCart = ({item}) => {

    const {delateCart, updateCart} = useContext(CustomContext)
    const [count, setCount] = useState(item.count)

  return (
    <div className="cart__product" >
    <div className="cart__product-left">
      <p onClick={() => delateCart(item.id, item.color, item.size)} className="cart__product-mark">X</p>
      <Link to={`/product/${item.id}`}>
        <img className="cart__product-img" src={item.image} alt={item.title}/>
      </Link>
      <p className="cart__product-name">{item.title}</p>
    </div>

    <ul className="cart__info-list">
       <li className="cart__info-item">{item.size}</li>
        <li className="cart__info-item">{item.color}</li>
        <li className="cart__info-item">${item.price}</li>
        <li className="cart__info-item ">
          <input className='product__content-input' type="number" value={count} onChange={(e) =>{
              setCount(e.target.value)
              updateCart(item.id, item.color, item.size, e.target.value)
          }} min='1'/> 
        </li>
        <li className="cart__info-item">${item.price * item.count}</li>
    </ul>
    
    </div>
  )
}

export default BasketCart