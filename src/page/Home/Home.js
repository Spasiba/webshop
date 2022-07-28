
import { useTranslation } from 'react-i18next'
import {Link, NavLink} from "react-router-dom"
import CollectionCard from './CollectionCard'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import img from './item1.png'
import slide1 from './IMAGE.png'


const Home = () => {
    const {t,i18n} = useTranslation()

  return (
      <main>
        <section>
            <div className="container">
                <div className="first-section">
                    <h1 className="first-section__title" dangerouslySetInnerHTML={{__html: t("home.firstScreen.title")}}/>
                    <p className="first-section__subtitle"  dangerouslySetInnerHTML={{__html: t("home.firstScreen.subtitle")}}/>
                <div className="first-section__buttons">
                <button type="button" className="first-section__button"><NavLink to="/shop">{t("home.firstScreen.button")}</NavLink></button>
                </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <h2 className="collection-section__title">{t("home.collectionScreen.title")}</h2>
                <div className="collection-section__container">
                    <CollectionCard img={img} title={t("home.collectionScreen.card-title1")}/>
                    <CollectionCard img={img}  title={t("home.collectionScreen.card-title2")}/>
                    <CollectionCard img={img} title={t("home.collectionScreen.card-title3")}/>
                </div>
                <div className="collection-section__btn">
                <button type="button" className="collection-section__button"><NavLink to="/shop">{t("home.firstScreen.button")}</NavLink></button>
                </div>
                
            </div>
        </section>
        <section>
            <div className="container">
            <h2 className="collection-section__title">{t("home.sliderScreen.title")}</h2>
            <div className='slider-section'>
            <Carousel className='slider'>
                <div>
                    <LazyLoadImage
                        alt="img"
                        src={slide1}
                        effect="blur"
                    />
                    
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <LazyLoadImage
                        alt="img"
                        src={slide1}
                        effect="blur"
                    />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <LazyLoadImage
                        alt="img"
                        src={slide1}
                        effect="blur"
                    />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <div className='slider-section__content'>
                <h3>{t("home.sliderScreen.subtitle")}</h3>
                <p className='slider-section__text'>{t("home.sliderScreen.text1")}</p>
                <p className='slider-section__text'>{t("home.sliderScreen.text2")}</p>
                <Link to={"/brands"}>
                    <p className='slider-section__link'>{t("home.sliderScreen.about")}</p>
                </Link>
            </div>
            </div>
            </div>
        </section>

      </main>
     
   
    
  )
}

export default Home