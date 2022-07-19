import React, { useContext, useState } from 'react'
import { initReactI18next, useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom';
import { CustomContext } from '../../Context';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';

const Shop = () => {
  const {t} = useTranslation();

  const [sort,setSort] = useState('')

  const {shop, status,setStatus,page,setPage, user } = useContext(CustomContext)

  return (
   <section className="shop">
     <div className="container">
        <h2 className="title">{t("shop.about.title")}</h2>
        <div className='page-links'>
            <Link to="/">{t("shop.about.link1")}</Link>
            -
            <NavLink to="/shop">{t("shop.about.link2")}</NavLink>
        </div>
        <ul className="shop__list">
          <li className={`shop__item ${status === 'all' && 'shop__itemActive'}`} onClick={()=>{
            setStatus("all");
            setPage(1)
          }}>Все</li>
          <li className={`shop__item  ${status === 'coat' && 'shop__itemActive'}`}  onClick={()=> {
            setStatus("coat")
            setPage(1)
          }}>Пальто</li>
          <li className={`shop__item  ${status === 'sweatshirt' && 'shop__itemActive'}`}  onClick={()=> {
            setStatus("sweatshirt");
            setPage(1)
          }}>Свитшоты</li>
          <li className={`shop__item ${status === 'cardigan' && 'shop__itemActive'}`}  onClick={()=>{
            setStatus("cardigan");
            setPage(1);
          }}>Кардиганы</li>
          <li className={`shop__item ${status === 'hoodie' && 'shop__itemActive'}`}   onClick={()=> {
          setStatus("hoodie");
          setPage(1)
          }}>Толстовки</li>
        </ul>

        {
          user.email === 'admin@gmail.com' ?
          <div>
            <Link to='/create' className="shop__button" type="button">Добавить</Link> 
           </div>
          : <span></span>
        }
       
        <div className="shop__sort">
         
          <div className='shop__sort-btn'>
          <p>Сортировка: {sort === 'big' ? 'Сначала большая цена' : sort === 'less' ? 'Сначала низкая цена' : sort === "sale" ? 'Товар со скидками' : ''}</p>
            <button className="shop__button" type="button" onClick={() => setSort('big')}>к большему</button>
            <button className="shop__button" type="button" onClick={() => setSort('less')}>к меньшему</button>
            <button className="shop__button" type="button" onClick={() => setSort('sale')}>скидки</button>
          </div>
          <p className="">
            Показано: {shop.filter((item)=> sort === 'sale' ? item.priceSale :  (status === 'all') ? item : item.category === status).filter((item, idx) => {
              return idx + 1 <= page * 9 && idx >= page * 9 - 9 ;
            }).length} из {shop.filter((item)=> (status === 'all') ? item : item.category === status).filter((item) => sort === 'sale' ? item.priceSale : item ).length} товаров
        </p>
        </div>

        

        <div className="shop__row">
          {
            shop.sort((a,b) => {
              if (sort === 'big'){
                return ( b.priceSale || b.price) - ( a.priceSale || a.price)
              } else if (sort === 'less'){
                return ( a.priceSale || a.price) - ( b.priceSale || b.price)
              }
            }).filter((item)=> sort === 'sale' ? item.priceSale :item
            ).filter((item)=>{
              if (status === 'all'){
                return item
              }else{
                return item.category === status
              }
            }).filter((item, idx) => {
              return idx + 1 <= page * 9 && idx >= page * 9 - 9 ;
            }).map(item => (
              <div key={item.id} className="shop__card">
                  <Link className='shop__card-link' to={`/product/${item.id}`}>
                    <LazyLoadImage
                        alt={item.title}
                        title={item.title}
                        className="shop__card-img"
                        src={`../${item.image}`}
                        effect="blur"
                    />
                  </Link>
                    <h3 className="shop__card-title">{item.title}</h3>
                    <p className="shop__card-price">${item.priceSale 
                    ? <>
                      <span style={{textDecoration: 'line-through'}}>{item.price}</span> 
                      /
                      <span>${item.priceSale}</span>
                      </>
                    : item.price}</p>
                    
                      {
                        item.inStock > 0 ?
                        <p className="shop__card-inStock"> в наличии : <span>{item.inStock}</span> </p>
                        : <p className="shop__card-inStock">Нет в наличии</p>
                      }
                   
              </div>
             ))
          }
        </div>
        <p className="">
            Показано: {shop.filter((item)=> sort === 'sale' ? item.priceSale :  (status === 'all') ? item : item.category === status).filter((item, idx) => {
              return idx + 1 <= page * 9 && idx >= page * 9 - 9 ;
            }).length} из {shop.filter((item)=> (status === 'all') ? item : item.category === status).filter((item) => sort === 'sale' ? item.priceSale : item ).length} товаров
        </p>

        {
          shop.filter((item)=> (status === 'all') ? item : item.category === status
            
          ).length > 9 
          ? <Pagination simple onChange={setPage} current={page} total={shop.filter((item)=> (status === 'all') ? item : item.category === status).length} pageSize={9} /> 
          : ''
        }
   
     </div>
   </section>
  )
}

export default Shop