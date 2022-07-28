import React from 'react'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, NavLink } from 'react-router-dom'
import img from '../Home/item1.png'

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

        <div className='slider-section'>
        <div className='slider'>
            <LazyLoadImage
                alt="img"
                src={img}
                effect="blur"
              />
          </div>
          <div className='slider-section__content'>
                <h3>{t("home.sliderScreen.subtitle")}</h3>
                <p className='slider-section__text'>{t("home.sliderScreen.text1")}</p>
                <p className='slider-section__text'>{t("home.sliderScreen.text2")}</p>
                <Link to={"/brands"}>
                    <p className='slider-section__link'>{t("home.sliderScreen.about")}</p>
                </Link>
            </div>
        </div>
        <div className='slider-section'>
          <div className='slider'>
                <h3>{t("home.sliderScreen.subtitle")}</h3>
                <p className='slider-section__text'>{t("home.sliderScreen.text1")}</p>
                <p className='slider-section__text'>{t("home.sliderScreen.text2")}</p>
                <Link to={"/brands"}>
                    <p className='slider-section__link'>{t("home.sliderScreen.about")}</p>
                </Link>
            </div>
            <div className='slider-section__content'>
            <LazyLoadImage
                alt="img"
                src={img}
                effect="blur"
              />
            </div>
            
        </div>
    </div>
  </section>
  )
}

export default Brands