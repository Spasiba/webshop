
import { useTranslation } from 'react-i18next'
import {Link, NavLink} from "react-router-dom"
import CollectionCard from './CollectionCard'


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
                <button></button>
                <button type="button" className="first-section__button"><NavLink to="/shop">{t("home.firstScreen.button")}</NavLink></button>
                </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <h2 className="collection-section__title">{t("home.collectionScreen.title")}</h2>
                <div className="collection-section__container">
                    <CollectionCard img={''} title={t("home.collectionScreen.card-title1")}/>
                    <CollectionCard img={''}  title={t("home.collectionScreen.card-title2")}/>
                    <CollectionCard img={''} title={t("home.collectionScreen.card-title3")}/>
                </div>
                <div className="collection-section__btn">
                <button type="button" className="collection-section__button"><NavLink to="/shop">{t("home.firstScreen.button")}</NavLink></button>
                </div>
            </div>
        </section>

      </main>
     
   
    
  )
}

export default Home