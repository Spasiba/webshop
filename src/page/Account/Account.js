
import React,{useContext, useState} from 'react'
import { CustomContext } from '../../Context'
import { useTranslation } from 'react-i18next'
import {Link, NavLink} from "react-router-dom"

const Account = () => {
    const {t} = useTranslation()
    const {user} = useContext(CustomContext)

  return (
    <section className="account">
    <div className="container">
       <h2 className="title">{t("account.about.title")}</h2>
       <div className='page-links'>
            <Link to="/">{t("account.about.link1")}</Link>
            -
            <NavLink to="/account">{t("account.about.link2")}</NavLink>
        </div>
        {
            user.login.length
                     ?  
                     <div className="account__info">
                     <p className="account__info-text"><b>email:</b> {user.email}</p>
                     <p className="account__info-text"><b>login:</b> {user.login}</p>
                     <p className="account__info-text"><b>phone:</b> {user.phone}</p>
                    </div>
                     : <div className="account__non"> 
                         <p className="account__info-text"> Войдите в свой аккаунт или пройдите Регистрацию</p>
                         <Link  className="account__non-text" to="/login"> Войти</Link>
                         <Link  className="account__non-text" to="/register">Регистрация</Link>
                     </div>
                }

    </div>
  </section>
  )
}

export default Account