import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom'

const Brands = () => {

  const {t} = useTranslation();
  return (
    <section className="brands">
    <div className="container">
       <h2 className="title">{t("brands.about.title")}</h2>
       <div className='page-links'>
            <Link to="/">{t("brands.about.link1")}</Link>
            -
            <NavLink to="/brands">{t("brands.about.link2")}</NavLink>
        </div>
    </div>
  </section>
  )
}

export default Brands