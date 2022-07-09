import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom'

const Contact = () => {
  const {t} = useTranslation();
  return (
    <section className="contact">
    <div className="container">
       <h2 className="title">{t("contact.about.title")}</h2>
       <div className='page-links'>
            <Link to="/">{t("contact.about.link1")}</Link>
            -
            <NavLink to="/contact">{t("contact.about.link2")}</NavLink>
        </div>
    </div>
  </section>
  )
}

export default Contact