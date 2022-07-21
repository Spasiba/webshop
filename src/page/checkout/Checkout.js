import React,{useEffect, useState, useContext} from 'react'
import axios from "axios";
import {CustomContext} from "../../Context";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form';

const Checkout = () => {
    const {t} = useTranslation()

    const navigate = useNavigate()

    const {cart,ticket,user,setCart, setTicket, setUser} = useContext(CustomContext)

    const {reset, register, handleSubmit} = useForm()

    const addOrder = async (data) => {
       await axios.post('http://localhost:8080/orders', {
            ...data,
            clothes: cart,
            price: Array.isArray(ticket) && ticket.length
                ? cart.reduce((acc, rec) =>  acc + rec.count * rec.price, 0) - cart.reduce((acc, rec) =>  acc + rec.count * rec.price, 0) / 100 * ticket[0].sum 
                : cart.reduce((acc, rec) =>  acc + rec.count * rec.price, 0),
            user: user.email,
            date: new Date() 
        }).then(() => console.log('Success'))

        await axios.post(`http://localhost:8080/users/${user.id}`, {
            orders: [
                ...user.orders,
                {
                    clothes: cart,
                    price: Array.isArray(ticket) && ticket.length
                    ? cart.reduce((acc, rec) =>  acc + rec.count * rec.price, 0) - cart.reduce((acc, rec) =>  acc + rec.count * rec.price, 0) / 100 * ticket[0].sum 
                    : cart.reduce((acc, rec) =>  acc + rec.count * rec.price, 0),
                    date: new Date() 
                }
            ]}
        ).then(() => console.log('Success'))

        await axios(`http://localhost:8080/users/${user.id}`).then((res) => setUser(res.data))

        await Array.isArray(ticket) && ticket.length && ticket[0].count > 1 ? 
            axios.patch(`http://localhost:8080/tickets/${ticket[0].id}`, {count: ticket[0].count - 1 })
                .then(() => console.log('use ticket'))
            : Array.isArray(ticket) && ticket.length && ticket[0].count === 1 ? axios.delete(`http://localhost:8080/tickets/${ticket[0].id}`).then(() => console.log('success delate ticket')) 
                : console.log('error')

        await reset()
        await setCart([])
        await setTicket([])
        await navigate('/order')
    }

  return (
    <div className="checkout">
        <div className="container">
            <h2 className="title">{t("checkout.about.title")}</h2>
            <div className='page-links'>
              <Link to="/">{t("checkout.about.link1")}</Link>
                -
              <NavLink to="/checkout">{t("checkout.about.link2")}</NavLink>
            </div>

            <form onSubmit={handleSubmit(addOrder)}>
            <div className="checkout__buyer-top">

                <div className="checkout__buyer-li">
                    <h2>Данные покупателя</h2>
                    <div className="checkout__buyer-input">
                    <input {...register("name")} type="text" placeholder="введите Имя"  className='cart__discount-input' />
                    <input {...register("phone")} type="text" placeholder="введите Телефон"  className='cart__discount-input' />
                    <input {...register("email")} type="text" placeholder="введите E-mail"  className='cart__discount-input' />
                    </div>
               
                
                </div>
               
                <div className="checkout__buyer-li">
                <h2>Ваш заказ</h2>
                <div className="checkout__buyer-top">
                    <p>Товар</p>
                    <p>Всего</p>
                </div>
                {
                    cart.map((item,idx) => (
                        <li key={idx} className="checkout__buyer-cart">
                            <div className="checkout__buyer-top">
                                <p className="checkout__buyer-product">
                                    {item.title}
                                </p>
                                <p className="checkout__buyer-price">
                                    {item.count}
                                </p>
                            </div>
                            <div className="checkout__buyer-top">
                                <p className="checkout__buyer-product">
                                    {item.color}
                                </p>
                                <p className="checkout__buyer-price">
                                    {item.size}
                                </p>
                                <p className="checkout__buyer-price">
                                    ${item.count * item.price}
                                </p>
                            </div>
                        </li>
                    ))
                }
                    <p className='cart__discount-price1'>Подытог: ${cart.reduce((acc, rec) =>  acc + rec.count * rec.price, 0)}</p>
                    <p className='cart__discount-price2'>Итого : ${Array.isArray(ticket) && ticket.length
                        ? cart.reduce((acc, rec) =>  acc + rec.count * rec.price, 0) - cart.reduce((acc, rec) =>  acc + rec.count * rec.price, 0) / 100 * ticket[0].sum 
                        : cart.reduce((acc, rec) =>  acc + rec.count * rec.price, 0) 
                    }</p> 
                </div>
            </div>
            <div className="checkout__buyer-top">
                <div className="checkout__buyer-li">
                    <h2>Адрес получателя</h2>
                    <div className="checkout__buyer-input">
                    <input {...register("contry")} type="text" placeholder="введите Страну"  className='cart__discount-input' />
                    <input {...register("city")} type="text" placeholder="введите Город"  className='cart__discount-input' />
                    <input {...register("street")} type="text" placeholder="введите Улицу"  className='cart__discount-input' />
                    <input {...register("home")} type="text" placeholder="введите Дом"  className='cart__discount-input' />
                    <input {...register("room")} type="text" placeholder="введите Квартиру"  className='cart__discount-input' />
                    </div>                
                </div>
                <div className="checkout__buyer-li">
                    <h2>Способы оплаты</h2>
                    <div className="checkout__buyer-input">
                    
                    </div>
                    <button className='cart__discount-buttonPrice' type='submit'>Разместить заказ</button>
                </div>
            </div>
            <div className="checkout__buyer-top">
                <div className="checkout__buyer-li">
                    <h2>Коментарии</h2>
                    <div className="checkout__buyer-input">
                    <input {...register("message")} type="text" placeholder="введите Страну"  className='cart__discount-input' />
                    </div>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Checkout