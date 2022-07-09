import {useParams} from "react-router-dom"
import React,{useEffect, useState, useContext} from 'react'
import axios from "axios";
import {CustomContext} from "../../Context";
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import BasketCart from "./BasketCart";

const Cart = () => {
  const {t} = useTranslation()

  const {cart, delateCart, setCart, ticket,setTicket} = useContext(CustomContext)

  const useTicket = (e) => {
    e.preventDefault()
    axios(`http://localhost:8080/tickets?title=${e.target[0].value}`)
    .then((data) => {
      if(data.data.length){
        setTicket(data.data)
      }else{
        setTicket('нету такого купона')
      }
    })
    
  }

  return (
    <div className='cart'>
      <div className='container'>
        <h2 className="title">{t("cart.about.title")}</h2>
          <div className='page-links'>
              <Link to="/">{t("cart.about.link1")}</Link>
                -
              <NavLink to="/cart">{t("cart.about.link2")}</NavLink>
          </div>
        <div className="cart__info">
          <p className="cart__info-title">Товар</p>
          <ul className="cart__info-list">
            <li className="cart__info-item">Размер</li>
            <li className="cart__info-item">Цвет</li>
            <li className="cart__info-item">Цена</li>
            <li className="cart__info-item">Количество</li>
            <li className="cart__info-item">Всего</li>
          </ul>
        </div>

          {
            cart.map((item, idx) => (
              <BasketCart key={idx} item={item}/>
            ))
          }
          <div className='cart__discount'>
            <form className='cart__discount-firstSection' onSubmit={useTicket}>
              <input type="text" placeholder="введите промокод"  className='cart__discount-input' />
              <button type='submit' className='cart__discount-button'>Применить купон</button>
             
                {Array.isArray(ticket) && ticket.length ? 
                  <p className='cart__discount-message'>
                        По даному промокоду получаете скидку {ticket[0].sum}%
                  </p>
                  : ticket.length ? 
                  <p className='cart__discount-message'>
                        {ticket}
                  </p>
                  : ''
                }
           
            </form>
            <button className='cart__discount-button' onClick={()=> setCart([])}>Очистить корзину</button>
          </div>
          <div className='cart__discount-twoSection'>
            <div className='cart__discount-priceSec' >
              <p className='cart__discount-price1'>Подытог: ${cart.reduce((acc, rec) =>  acc + rec.count * rec.price, 0)}</p>
            <div className='cart__discount-priceSection' >
              <p className='cart__discount-price2'>Итого : ${Array.isArray(ticket) && ticket.length
                ? cart.reduce((acc, rec) =>  acc + rec.count * rec.price, 0) - cart.reduce((acc, rec) =>  acc + rec.count * rec.price, 0) / 100 * ticket[0].sum 
                : cart.reduce((acc, rec) =>  acc + rec.count * rec.price, 0) 
              }</p> 
             <Link to='/checkout'> <button className='cart__discount-buttonPrice' type='button'> Оформить заказ</button></Link>
            </div>
            </div>
          </div>
        

      </div>
    </div>
  )
}

export default Cart