
import React,{useContext} from 'react'
import { CustomContext } from '../../Context'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Register = () => {

    const {registerUser}=useContext(CustomContext)
 
    const {
        register,
        handleSubmit,
        formState: {
          errors
        },
        watch
      } = useForm({
        mode:"onBlur"
      })
  



  return (
    <section className="register">
         <form className="form" onSubmit={handleSubmit(registerUser)} >
            <h2 className="form__title">Регистрация</h2>

            <input {...register('email')} className="form__input" type="email" placeholder="Введите email"/>
            <input {...register('login')} className="form__input"  type="text" placeholder="Введите login"/>
            <input {...register('phone')} className="form__input"  type="text" placeholder="Введите номер"/>
            <input className="form__input" placeholder="Введите пароль" {...register('password' , {
                              required: "you must specify a password",
                              minLength: {
                                value: 6,
                                message: "Password must have at least 6 characters"
                              }
                            })} type='password'/>
            {errors?.password && <p>{errors?.password?.message}</p>}
            <input className="form__input" placeholder="Подтвердить пароль"  {...register('confirmPwd', {
                              validate:(val) => {
                                if(watch('password') !== val){
                                  return "Your password do no math"
                                }
                              }
                            })} type='password'/>
            {errors?.confirmPwd && <p>{errors?.confirmPwd?.message}</p>}

            <button className="form__btn" type="submit">Зарегистрироватся</button>

            <p>есть аккаунт, <Link className="register__login" to="/login"> Войдите</Link></p>
        </form>
    </section>
  )
}

export default Register