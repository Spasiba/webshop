import axios from 'axios'
import React,{useContext} from 'react'
import { CustomContext } from '../../Context'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

    const {registerUser}=useContext(CustomContext)
 
   const {
       register,
       handleSubmit,
       setError:{
           errors
       },
       reset
   } = useForm();



  return (
    <section className="register">
         <form className="form" onSubmit={handleSubmit(registerUser)} >
            <h2 className="form__title">Регистрация</h2>

            <input {...register('email')} className="form__input" type="email" placeholder="Введите email"/>
            <input {...register('login')} className="form__input"  type="text" placeholder="Введите login"/>
            <input {...register('phone')} className="form__input"  type="text" placeholder="Введите номер"/>
            <input {...register('password')} className="form__input"  type="password" placeholder="Введите пароль"/>
            <input className="form__input" type="password" placeholder="Подтвердить пароль"/>

            <button className="form__btn" type="submit">Зарегистрироватся</button>

            <p>есть аккаунт, <Link className="register__login" to="/login"> Войдите</Link></p>
        </form>
    </section>
  )
}

export default Register