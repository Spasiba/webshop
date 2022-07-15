import {useParams} from "react-router-dom"
import React,{useEffect, useState, useContext} from 'react'
import axios from "axios";
import {CustomContext} from "../../Context";
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const Product = () => {
    const {t} = useTranslation();
    const params = useParams()
    
    const [count, setCount] = useState(1)
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const {shop, page, setPage, status, setStatus, addCart, product, setProduct} = useContext(CustomContext)
 

    useEffect(() => {
        axios(`http://localhost:8080/clothes/${params.id}`)
        .then(({data}) => {
            setProduct(data)
            setColor(data.colors[0])
            setSize(data.size[0])
        })
    }, [params])
    

  return (
    <div className="product">
        <div className="container">
            { product.title &&<>
                <h2 className='title'>{product.title}</h2>
                <div className='page-links'>
            <Link to="/">{t("shop.about.link1")}</Link>
            -
            <NavLink to="/shop" onClick={()=>{setPage(1) && setStatus(product.category)}}>{product.category}</NavLink>
            -
            <p style={{color: "#919191"}}>{product.title}</p>
        </div>
                <div className="product__content">
            <img className="product__content-img" src={`/${product.image}`} alt={product.title} />
            <div className="product__info">
                <p className="product__content-price">${product.priceSale 
                    ? <>
                      <span style={{textDecoration: 'line-through'}}>{product.price}</span> 
                      /
                      <span className="product__content-priceSale">${product.priceSale}</span>
                      </>
                    : product.price}</p>
                <p className="product__content-choose">Выберите размер</p>
                <ul className="product__content-sizes">
                    {
                        product.size.map((item) => (
                        <li key={item} onClick={()=> setSize(item)} className={`product__content-size ${item === size ? 'product__content-sizeActive':''}`}>{item}</li>
                        ))
                   }
                </ul>
                <p className="product__content-choose">Выберите цвет</p>
                <ul className="product__content-sizes">
                    {
                        product.colors.map((item) => (
                        <li key={item} onClick={()=> setColor(item)} style={{background: item}} className={`product__content-color ${item === color ? 'product__content-colorActive':''}`}/>
                        ))
                   }
                </ul>
             
                {
                        product.inStock > 0 ?
                        <p className="product__content-choose"> в наличии : <span>{product.inStock}</span> </p>
                        : <p className="product__content-choose">Нет в наличии</p>
                }
                
                <div className='product__content-form'>
                    <input className='product__content-input' value={count} onChange={(e) => setCount(e.target.value)} disabled={!product.inStock} min='1' max={product.inStock} defaultValue='1'/>
                    <button className='product__content-btn' onClick={()=>addCart({
                       id: product.id,
                       title: product.title,
                       image: product.image,
                       color,
                       size,
                       count,
                       price: product.priceSale || product.price,
                       category: product.category
                    })} type='button'  disabled={product.inStock <= 0}>Добавить в корзину</button>
                </div>
            </div>
        </div>
                <p className="product__variant">{t("product.subtitle")}</p>

                <div className='product__row'>
                   {
                       shop.filter((item)=> {
                        return item.category === product.category && item.id !== product.id
                       }).slice(0,3).map((item) => (
                        <div key={item.id} className="shop__card">
                            <Link className='shop__card-link' to={`/product/${item.id}`}>
                                <img className="shop__card-img" src={`../${item.image}`} alt={item.title} />
                            </Link>
                            <h3 className="shop__card-title">{item.title}</h3>
                            <p className="shop__card-price">${item.priceSale 
                            ? <>
                                <span style={{textDecoration: 'line-through'}}>{item.price}</span> 
                                /
                                <span>${item.priceSale}</span>
                            </>
                            : item.price}</p>
                        </div>
                       ))
                   }
                </div>
            </>}
        </div>

    </div>
  )
}

export default Product