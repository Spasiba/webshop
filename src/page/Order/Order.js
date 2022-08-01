import React from 'react'

import { Link, NavLink, } from 'react-router-dom';
import { useTranslation } from 'react-i18next'


const Order = () => {
    const {t} = useTranslation()
  return (
    <div>
        <div className="container">
            <h2 className="title">{t("checkout.about.title")}</h2>
            <div className='page-links'>
              <Link to="/">{t("checkout.about.link1")}</Link>
                -
              <NavLink to="/checkout">{t("checkout.about.link2")}</NavLink>
            </div>
            <h1>УСПЕХ</h1>

        </div>
    </div>
  )
}

export default Order