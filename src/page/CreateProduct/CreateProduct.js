import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import { CustomContext } from '../../Context';
import CreateColors from './CreateColors';
import CreateSize from './CreateSize';

const CreateProduct = () => {

    const {t} = useTranslation();
    const navigate = useNavigate()

    const {getAllClothes} = useContext(CustomContext)

    const [sizes, setSizes] = useState('')

    const [colors, setColors] = useState('')

    const {register, reset, handleSubmit} = useForm()

    const createProduct = (data) => {
        axios.post('http://localhost:8080/clothes', {
            ...data,
            colors,
            sizes,
            image: 'Shop/'+data.image[0].name
        }).then(() => {
            getAllClothes()
            navigate('/shop')
        })
        console.log(data)
    }
 
  return (
    <section className="create">
    <div className="container">
       <h2 className="title">Cоздать продукт</h2>
       <div className='page-links'>
            <Link to="/">{t("brands.about.link1")}</Link>
            -
            <Link to="/shop">Магазин</Link>
            -
            <NavLink to="/create">Создание товара</NavLink>
        </div>

        <form className='create__form' onSubmit={handleSubmit(createProduct)}>
            <div className='create__form-block'>
                <label htmlFor="title">Название</label>
                <input {...register('title')} type="text" id="title" />
            </div>
            <div className='create__form-block'>
                <label htmlFor="price">Цена</label>
                <input {...register('price')} type="number" id="price" />
            </div>
            <div className='create__form-block'>
                <label htmlFor="inStock">Количество</label>
                <input {...register('inStock')} type="number" id="inStock" />
            </div>
            <div className='create__form-block'>
                <label htmlFor="image">Картинка</label>
                <input {...register('image')} type="file" id="image" />
            </div>
            <div className='create__form-block'>
                <ul className="product__content-sizes">
                    <CreateColors colors={colors} setColors={setColors} color={"blue"}/>
                    <CreateColors colors={colors} setColors={setColors} color={"red"}/>
                    <CreateColors colors={colors} setColors={setColors} color={"green"}/>
                    <CreateColors colors={colors} setColors={setColors} color={"black"}/>
                    <CreateColors colors={colors} setColors={setColors} color={"white"}/>
                    <CreateColors colors={colors} setColors={setColors} color={"orange"}/>
                </ul>
            </div>
            <div  className='create__form-block'>
                <ul className="product__content-sizes">
                    <CreateSize sizes={sizes} setSizes={setSizes} size={'S'}/>
                    <CreateSize sizes={sizes} setSizes={setSizes} size={'M'}/>
                    <CreateSize sizes={sizes} setSizes={setSizes} size={'L'}/>
                    <CreateSize sizes={sizes} setSizes={setSizes} size={'XL'}/>
                </ul>
            </div>
            <div className='create__form-block'>
                <label htmlFor="category">Категория</label>
                <select {...register('category')} id="category">
                    <option >hoodie</option>
                    <option >coat</option>
                    <option >sweatshirt</option>
                    <option >cardigan</option>
                </select>
            </div>
            <button type='submit'>Создать</button>
            
        </form>
    </div>
  </section>
  )
}

export default CreateProduct